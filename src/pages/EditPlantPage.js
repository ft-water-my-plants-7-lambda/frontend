import Page from '../components/Page';
import EditPlants from '../components/Plants/EditPlants';

const EditPlantPage = ({ setPlants }) => {
  return (
    <Page>
      <EditPlants setPlants={setPlants} />
    </Page>
  );
};

export default EditPlantPage;
