import styles from './Login.module.css'
import React, { useState } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

function Login() {

    const [loadings, setLoadings] = useState([]);
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = true;
        return newLoadings;
        });
        setTimeout(() => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = false;
            return newLoadings;
        });
        }, 6000);
    };

    return (
        <div className={styles.containerLogin}>
            <div className={styles.login}>
                <Input size="large" placeholder="Login" prefix={<UserOutlined />} className={styles.inputId}/>
                <Input.Password placeholder="Senha" className={styles.inputPassword}/>
                <Button
                    type="primary"
                    icon={<LoginOutlined />}
                    loading={loadings[1]}
                    onClick={() => enterLoading(1)}
                    className={styles.botao}
                >
                    Entrar
                </Button>
            </div>
        </div>
    )
}

export default Login