import {
  WelcomeMessage,
  PlantAmount,
  PlantListWrapper,
  PlantListContainer,
} from './DashboardElements';
import PlantListItem from './PlantListItem';

import { connect } from 'react-redux';

const PlantList = ({ plants }) => {
  return (
    <>
      <WelcomeMessage>Welcome Username</WelcomeMessage>
      <PlantAmount>You have {plants.length} Plants!</PlantAmount>
      {plants.length && (
        <PlantListWrapper>
          <PlantListContainer>
            {plants.map((plant) => (
              <PlantListItem key={plant.plant_id} {...plant} />
            ))}
          </PlantListContainer>
        </PlantListWrapper>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({ plants: state.plants });

export default connect(mapStateToProps)(PlantList);
