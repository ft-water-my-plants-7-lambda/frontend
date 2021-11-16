import Page from '../components/Page';
import Plants from '../components/Plants/Dashboard/PlantList';

const PlantsPage = ({ plants }) => {
  return (
    <Page>
      <Plants plants={plants} />
    </Page>
  );
};

export default PlantsPage;
