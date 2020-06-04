import React, { useState, FormEvent, useEffect, useContext } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { Title, Form, Repository, Error, Button } from './styles';
import api from '../../services/api';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GitExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });

  const { title } = useContext(ThemeContext);

  useEffect(() => {
    localStorage.setItem(
      '@GitExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepo) {
      setInputError('Digite autor/nome do repositório');
      return;
    }

    try {
      const response = await api.get<Repository>(`/repos/${newRepo}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setNewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Erro na busca do repositório');
    }
  }
  return (
    <>
      <Title>Explore Repositórios no Github</Title>
      <Form
        hasError={!!inputError}
        themeColor={title}
        onSubmit={handleAddRepository}
      >
        <input
          type="text"
          value={newRepo}
          onChange={(event) => setNewRepo(event.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <Button type="submit" themeColor={title}>
          Pesquisar
        </Button>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      <Repository themeColor={title}>
        {repositories.map((repository) => (
          <Link
            to={`/repository/${repository.full_name}`}
            key={repository.full_name}
          >
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />

            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repository>
    </>
  );
};

export default Dashboard;
