import React, { useState, useEffect } from "react";
import { Col, Row, Statistic } from "antd";
import styles from "./MyStatistics.module.css";
import { fetchPeopleCount, fetchFilmsCount, fetchPlanetsCount, fetchNavesCount } from "../../services/Service.js";
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );

function MyStatistics() {
  const [peopleData, setPeopleData] = useState([]);
  const [filmsData, setFilmsData] = useState([]);
  const [planetsData, setPlanetsData] = useState([]);
  const [navesData, setNavesData] = useState([]);

  const [loadingPeople, setLoadingPeople] = useState(true);
  const [loadingFilms, setLoadingFilms] = useState(true);
  const [loadingPlanets, setLoadingPlanets] = useState(true);
  const [loadingNaves, setLoadingNaves] = useState(true);

  useEffect(() => {
    async function fetchDataFromAPI() {
      try {
        const people = await fetchPeopleCount();
        setPeopleData(people);
        setLoadingPeople(false);

        const films = await fetchFilmsCount();
        setFilmsData(films);
        setLoadingFilms(false);

        const planets = await fetchPlanetsCount();
        setPlanetsData(planets);
        setLoadingPlanets(false);

        const naves = await fetchNavesCount();
        setNavesData(naves);
        setLoadingNaves(false);
      } catch (error) {
        console.log("Erro no carregamento dos dados das estatísticas")
      }
    }

    fetchDataFromAPI();
  }, []);

  return (
    <div className={styles.statistics}>
      <div className={styles.statistic}>
        <Row gutter={16}>
          <Col span={12}>
            {loadingPeople ? (
                <Spin className={styles.spin} indicator={antIcon} />
            ) : (
                <Statistic title="Pessoas" value={peopleData} />
            )}
          </Col>
        </Row>
      </div>
      <div className={styles.statistic}>
        <Row gutter={16}>
          <Col span={12}>
            {loadingPlanets ? (
                <Spin className={styles.spin} indicator={antIcon} />
            ) : (
                <Statistic title="Planetas" value={planetsData} />
            )}
          </Col>
        </Row>
      </div>
      <div className={styles.statistic}>
        <Row gutter={16}>
          <Col span={12}>
            {loadingFilms ? (
                <Spin className={styles.spin} indicator={antIcon} />
            ) : (
                <Statistic title="Filmes" value={filmsData} />
            )}
          </Col>
        </Row>
      </div>
      <div className={styles.statistic}>
        <Row gutter={16}>
          <Col span={12}>
            {loadingNaves ? (
                <Spin className={styles.spin} indicator={antIcon} />
            ) : (
                <Statistic title="Espaço naves" value={navesData} />
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MyStatistics;
