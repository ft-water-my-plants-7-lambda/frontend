import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WelcomeMessage = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2%;
  font-weight: bold;

  @media (min-width: 1150px) {
    font-size: 3rem;
  }
`;

export const PlantAmount = styled.h2`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 2%;
`;

export const PlantListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  background: #fff;
  border: 1px solid #ccc;
  padding: 6%;
  box-shadow: 0px 0px 5px 0px #ccc;

  @media (min-width: 1150px) {
    width: 50%;
    padding: 2%;
  }
`;

export const PlantListContainer = styled.ol`
  counter-reset: li;
  list-style: none;
  padding: 0;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
`;

export const ListItems = styled(Link)`
  position: relative;
  display: block;
  padding: 0.4rem 0.4rem 0.4rem 2rem;
  padding: 1rem 2rem;
  border: 1px solid #ccc;
  margin: 0.5rem 0;
  background: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.3s ease-out;

  &:hover {
    background: #f5f5f5;

    &:before {
      transform: rotate(360deg);
    }
  }

  &:before {
    content: counter(li);
    counter-increment: li;
    position: absolute;
    left: -1.3em;
    top: 50%;
    margin-top: -1.3em;
    background: #01bf71;
    height: 2em;
    width: 2em;
    line-height: 2em;
    border: 0.3em solid #fff;
    text-align: center;
    font-weight: bold;
    border-radius: 2em;
    transition: all 0.3s ease-out;
  }
`;

export const DetailContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 95%;
  /* max-height: 216px; */
  background: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-bottom: 1%;
  @media (min-width: 1150px) {
    width: 50%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  background-position: center;
  background-size: cover;
  margin: 0;
  padding: 0;
`;

export const PlantInfo = styled.div`
  width: 100%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0.5em;
`;

export const Label = styled.p`
  font-size: 1rem;
  color: #c9d1d9;
  margin-bottom: 1%;
`;

export const Name = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  margin-bottom: 1%;
`;

export const Species = styled.h3`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  margin-bottom: 1%;
`;

export const WaterFreq = styled.h4`
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  margin-bottom: 2%;
`;

export const Buttons = styled.div`
  /* margin: 1% 0; */
`;

export const Button = styled.button`
  background: #01bf71;
  padding: 0.875em;
  display: inline-block;
  outline: none;
  border: 0;
  margin-right: 2px;
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #f5f5f5;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  background: #01bf71;
  padding: 0.7em;
  display: inline-block;
  outline: none;
  border: 0;
  margin-right: 2px;
  border-radius: 2px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #f5f5f5;
  cursor: pointer;
`;
