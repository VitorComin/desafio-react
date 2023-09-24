const apiUrl = 'https://swapi.dev/api';

// Funções de GET para o count
export const fetchPeopleCount = async () => {
  try {
    const response = await fetch(`${apiUrl}/people`);
    
    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status}`);
    }

    const data = await response.json();
    return data.count;
  } catch (error) {
    throw error;
  }
};

  export const fetchFilmsCount = async () => {
    try {
      const response = await fetch(`${apiUrl}/films`);
      
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }
  
      const data = await response.json();
      return data.count;
    } catch (error) {
      throw error;
    }
  };

  export const fetchPlanetsCount = async () => {
    try {
      const response = await fetch(`${apiUrl}/planets`);
      
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }
  
      const data = await response.json();
      return data.count;
    } catch (error) {
      throw error;
    }
  };

  export const fetchNavesCount = async () => {
    try {
      const response = await fetch(`${apiUrl}/starships`);
      
      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }
  
      const data = await response.json();
      return data.count;
    } catch (error) {
      throw error;
    }
  };

// Funções de GET dos dados todos
export const fetchPeople = async () => {
  try {
    let allPeople = [];
    let nextUrl = `${apiUrl}/people/`;

    while (nextUrl) {
      const response = await fetch(nextUrl);

      if (!response.ok) {
        throw new Error(`Erro na solicitação: ${response.status}`);
      }

      const data = await response.json();
      allPeople = [...allPeople, ...data.results];
      nextUrl = data.next;

      if (nextUrl === null) {
        break;
      }
    }

    return allPeople;
  } catch (error) {
    throw error;
  }
};

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

  export const fetchVeiculos = async () => {
    try {
      let allVeiculos = [];
      let nextUrl = `${apiUrl}/starships/`;
  
      while (nextUrl) {
        const response = await fetch(nextUrl);
  
        if (!response.ok) {
          throw new Error(`Erro na solicitação: ${response.status}`);
        }
  
        const data = await response.json();
        allVeiculos = [...allVeiculos, ...data.results];
        nextUrl = data.next;
  
        if (nextUrl === null) {
          break;
        }
      }
  
      return allVeiculos;
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