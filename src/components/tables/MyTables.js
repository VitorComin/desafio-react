import React from "react";
import styles from "./MyTables.module.css"
import { Input, Table } from 'antd';
import { useState, useEffect } from "react";
import { fetchPeople, fetchFilms, fetchVeiculos } from '../../services/Service.js'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import { format, parseISO } from 'date-fns';

const { Search } = Input;

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

function MyTables() {

    const [peopleData, setPeopleData] = useState([]);
    const [filmsData, setFilmsData] = useState([]);
    const [veiculosData, setVeiculosData] = useState([]);

    const [loadingPeople, setLoadingPeople] = useState(true);
    const [loadingFilms, setLoadingFilms] = useState(true);
    const [loadingVeiculos, setLoadingVeiculos] = useState(true);

    const [searchedPeopleData, setSearchedPeopleData] = useState([]);
    const [searchedVeiculosData, setSearchedVeiculosData] = useState([]);
    const [searchedFilmsData, setSearchedFilmsData] = useState([]);

    useEffect(() => {
      async function fetchDataFromAPI() {
          try {
              const people = await fetchPeople();
              setPeopleData(people.results);
              setLoadingPeople(false);

              const films = await fetchFilms();
              setFilmsData(films.results);
              setLoadingFilms(false);

              const veiculos = await fetchVeiculos();
              setVeiculosData(veiculos.results);
              setLoadingVeiculos(false);
              
          } catch (error) {
              console.error("Erro ao carregar dados da API:", error);
          }
      }

      fetchDataFromAPI();
  }, []);

    // Função para pesquisar pessoas
  const onSearchPeople = (value) => {
    const filteredPeopleData = peopleData.filter((person) =>
      person.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedPeopleData(filteredPeopleData);
    //console.log(value) - Foi para testar se o value estava chegando
  };

  // Função para pesquisar veículos
  const onSearchVeiculos = (value) => {
    const filteredVeiculosData = veiculosData.filter((veiculo) =>
      veiculo.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedVeiculosData(filteredVeiculosData);
  };

  // Função para pesquisar filmes
  const onSearchFilms = (value) => {
    const filteredFilmsData = filmsData.filter((film) =>
      film.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedFilmsData(filteredFilmsData);
  };

    const columnsPeople = [
        {
          title: 'Nome',
          dataIndex: 'name',
        },
        {
          title: 'Altura',
          dataIndex: 'height',
        },
        {
          title: 'Aniversário',
          dataIndex: 'birth_year',
        },
        {
          title: 'Criado em',
          dataIndex: 'created',
          render: (created) => {
            const createdDate = new Date(created);
            return createdDate.toLocaleString();
          }
        },
        {
          title: 'Editado em',
          dataIndex: 'edited',
          render: (edited) => {
            const editedDate = new Date(edited);
            return editedDate.toLocaleString();
          }
        },
      ];

      const columnsVeiculos = [
        {
          title: 'Nome',
          dataIndex: 'name',
        },
        {
          title: 'Modelo',
          dataIndex: 'model',
        },
        {
          title: 'Passageiros',
          dataIndex: 'passengers',
        },
        {
          title: 'Criado em',
          dataIndex: 'created',
          render: (created) => {
            const createdDate = new Date(created);
            return createdDate.toLocaleString();
          }
        },
        {
          title: 'Editado em',
          dataIndex: 'edited',
          render: (edited) => {
            const editedDate = new Date(edited);
            return editedDate.toLocaleString();
          }
        },
      ];

      const columnsFilms = [
        {
          title: 'Titulo',
          dataIndex: 'title',
        },
        {
          title: 'Diretor',
          dataIndex: 'director',
        },
        {
          title: 'Qtd. Personagens',
          dataIndex: "characters",
          render: (_, film) => {
            if (film && film.characters) {
              return film.characters.length;
            }
            return "";
          },
        },
        {
          title: 'Criado em',
          dataIndex: 'created',
          render: (created) => {
            const createdDate = new Date(created);
            return createdDate.toLocaleString();
          }
        },
        {
          title: 'Editado em',
          dataIndex: 'edited',
          render: (edited) => {
            const editedDate = new Date(edited);
            return editedDate.toLocaleString();
          }
        },
      ];

    return (
        <>
            <div className={styles.containerTables}>
                <div className={styles.headerTables}>
                    <p>Pessoas</p>
                    <Search placeholder="Pesquisar por nome" onSearch={onSearchPeople} style={{ width: 200 }} />
                </div>
                <div className={styles.line}></div>
                <div className={styles.myTabelas}>
                {loadingPeople ? (
                        <Spin className={styles.spin} indicator={antIcon} />
                    ) : (
                        <Table
                            components={{
                                body: {},
                            }}
                            rowKey="key"
                            columns={columnsPeople}
                            dataSource={searchedPeopleData.length > 0 ? searchedPeopleData : peopleData}
                        />
                    )}
                </div>
            </div>
            <div className={styles.containerTables}>
                <div className={styles.headerTables}>
                    <p>Veículos</p>
                    <Search placeholder="Pesquisar por nome" onSearch={onSearchVeiculos} style={{ width: 200 }} />
                </div>
                <div className={styles.line}></div>
                <div className={styles.myTabelas}>
                {loadingVeiculos ? (
                        <Spin className={styles.spin} indicator={antIcon} />
                    ) : (
                        <Table
                            components={{
                                body: {},
                            }}
                            rowKey="key"
                            columns={columnsVeiculos}
                            dataSource={searchedVeiculosData.length > 0 ? searchedVeiculosData : veiculosData}
                        />
                    )}
                </div>
            </div>
            <div className={styles.containerTables}>
                <div className={styles.headerTables}>
                    <p>Filmes</p>
                    <Search placeholder="Pesquisar por título" onSearch={onSearchFilms} style={{ width: 200 }} />
                </div>
                <div className={styles.line}></div>
                <div className={styles.myTabelas}>
                {loadingFilms ? (
                        <Spin className={styles.spin} indicator={antIcon} />
                    ) : (
                        <Table
                            components={{
                                body: {},
                            }}
                            rowKey="key"
                            columns={columnsFilms}
                            dataSource={searchedFilmsData.length > 0 ? searchedFilmsData : filmsData}
                        />
                    )}
                </div>
            </div>
        </>
    )


}

export default MyTables