import Page from '../components/Page';
import Plant from '../components/Plants/Dashboard/Plant';

const PlantPage = ({ plants, deletePlant }) => {
  return (
    <Page>
      <Plant plants={plants} deletePlant={deletePlant} />
    </Page>
  );
};

export default PlantPage;
