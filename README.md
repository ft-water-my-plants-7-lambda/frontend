# Water My Plants - Frontend

Fronted repo for Lambda School Build Week water-my-plants

## Routes

### `/`

- landing page

### `/login`

- unprotected route but hidden from navigation when authenticated
- `LoginForm` component
- form submission makes axios call to login
- form submission reroutes to `/plants`

### `/logout`

- protected route
- makes authenticated axios call to logout
- immediately reroutes to `/` or `/login`

### `/user`

- protected route
- displays username, phone number, etc.
- username and phone number have `Edit` buttons next to them
- `Change Password` button

### `/plants`

- protected route
- on mount, makes an authenticated API call to get user's plants
- `PlantsList` component that maps over plants in state and renders a `Plant` component for each plant
- Each `Plant` component routes to `/plants/:id` on click

### `/plants/add`

- protected route
- contains `AddPlantForm` component
- form submission makes authenticated axios call to post new plant object
- form submission reroutes to `/plants` and updates plant list state

### `/plants/:id`

- protected route
- contains `PlantCard` component
- displays picture[?], name, and information about plant
- has `Edit` and `Delete` buttons
- `Edit` button toggles between rendering `PlantCard` and `EditPlantForm` components
- `EditPlantForm` component has similar form to `AddPlantForm` but autofills with current plant data
- submission sends authenticated axios call to update plant using id
- `Delete` button toggles `DeleteConfirmationModal` component
- clicking 'Confirm' on modal sends authenticated axios call to delete plant using id
- updating or deleting plants requires updating plant list state
