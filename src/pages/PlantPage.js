import Page from '../components/Page';
import Plant from '../components/Plants/Dashboard/Plant';

const PlantPage = ({ plants, setPlants }) => {
  return (
    <Page>
      <Plant plants={plants} setPlants={setPlants} />
    </Page>
  );
};

export default PlantPage;
