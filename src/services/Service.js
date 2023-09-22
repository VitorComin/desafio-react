import React from "react";

const apiUrl = 'https://swapi.dev/api';

// Função para fazer uma solicitação GET de pessoas 
export const fetchPeople = async () => {
    try {
      const response = await fetch(`${apiUrl}/people`);
      
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };


  // Função para fazer uma solicitação GET de filmes 
  export const fetchFilms = async () => {
    try {
      const response = await fetch(`${apiUrl}/films`);
      
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };


  // Função para fazer uma solicitação GET de veículos
  export const fetchVeiculos = async () => {
    try {
      const response = await fetch(`${apiUrl}/starships`);
      
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };


  // Função para fazer uma solicitação GET de planetas 
  export const fetchPlanets = async () => {
    try {
      const response = await fetch(`${apiUrl}/planets`);
      
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };


  // Função para fazer uma solicitação GET de naves 
  export const fetchNaves = async () => {
    try {
      const response = await fetch(`${apiUrl}/starships`);
      
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };