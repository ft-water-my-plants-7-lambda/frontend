import Page from '../components/Page';
import AddPlants from '../components/Plants/AddPlants';

const AddPlantPage = ({ setPlants }) => {
  return (
    <Page>
      <AddPlants setPlants={setPlants} />
    </Page>
  );
};

export default AddPlantPage;
