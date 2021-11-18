import {
  WelcomeMessage,
  PlantAmount,
  PlantListWrapper,
  PlantListContainer,
} from './DashboardElements';
import PlantListItem from './PlantListItem';

import { connect } from 'react-redux';

const PlantList = ({ plants, user }) => {
  return (
    <>
      <WelcomeMessage>Welcome {user.username}</WelcomeMessage>
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

const mapStateToProps = (state) => ({ plants: state.plants, user: state.user });

export default connect(mapStateToProps)(PlantList);
