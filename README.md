### Day 4 (26/04/2024):

<img width="1511" alt="Screenshot 2024-04-26 at 3 12 15 PM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/75d83c9c-8540-49e4-92a2-a1454ae1719d">

- Have implemented most of the SideBar UI and corresponding state
- Using Context API for state management
- Using Chakra UI for certain UI features (tooltips, dropdowns)
- Will review Tailwind config once UI is fully built, make variable names adhere to defined structure
- Definitions for types can most likely be combined into a single file for consistency (currently spread across 2 files, and occasionally defined at component level)

### Day 5: (27/04/2024):

<img width="1495" alt="Screenshot 2024-04-27 at 6 42 26 PM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/d4b27a0b-780b-4a4d-9be7-98ef7d92335a">

<img width="1497" alt="Screenshot 2024-04-27 at 3 49 14 PM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/eadf3894-a83b-4c45-b738-68bfd3a742b0">

- Added 'Advanced Settings' accordion section and corresponding state
- Added pgae header and prompt input field
- Partial clean-up

### Day 6 (28/04/2024):

<img width="1511" alt="Screenshot 2024-04-28 at 2 51 36 PM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/d5ad2e9a-ab8b-4144-8626-797ce9c299e9">

- First pass at ImageGenerationHeader
- Negative prompt input and visibility state
- Placeholder states for model and imageStyle
- Styles for Model Selection drop down menu
- Plenty of clean-up and standardisation to be done vis-a-vis styles (currently a mash-up of Chakra UI inline, theme object & tailwind utils)
- Will also need to implement model and imageStyle states in SettingsContext
- Also contemplating whether a custom hook/controller might be a better option than Context API here. Will need to research further.

### Day 6 (28/04/2024) (later on):

<img width="1511" alt="Screenshot 2024-04-28 at 8 54 06 PM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/9c262d6f-8539-49db-b78e-5c9893dea6f2">

- Added links
- Lifted elements from page to layout level

### Day 7 (29/04/2024):

<img width="1512" alt="Screenshot 2024-04-29 at 10 55 05 AM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/db5cec80-6488-436d-9522-15748dc9c06d">
<img width="1511" alt="Screenshot 2024-04-29 at 10 54 57 AM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/a8f29db9-ded0-46de-80d6-20f01a497d80">

- Basic implementation of Image Guidance UI
- Basic implementation of Generation History UI (empty state)

### Day 7 (29/04/2024) (later):

<img width="1512" alt="Screenshot 2024-04-29 at 3 43 44 PM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/c8aec195-f605-4238-849a-c624f65c0dca">

- Basic implementation of Prompt Generation UI
- Styling is still messy at this point, page state needs to be integrated into SettingsContext
- Will proceed with major clean-up tomorrow, removing redundant code and moving strings into the constants file

### Day 8 (30/04/2024):

- Reworked file structure
- Moved all display strings to dedicated file
- Broke SideBar down into sub-components
- Broke ImageGenerationHeader down into sub-components
- Lifted state out of ImageGenerationHeader into SettingsContext
- General tidy-up and removal of repetetive/redundant code

### Day 9 (01/05/2024):

- Fixed up console errors related to casing issue
- Basic implementation of image file upload
- Wireframe version of UploadedImageComponent

### Day 10 (02/05/2024):

<img width="1512" alt="Screenshot 2024-05-02 at 2 33 04 PM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/07bdb00a-c317-48f5-b5f0-6abc38d56063">

- Implemented context state for image upload
- Implemented ImageUploadInput component
- Implemented UploadedImageComponent
- Functions for uploading and deleting uploaded images
- Functions for comparing uploaded aspect ratio with selected aspect ratio

### Day 11 (03/05/2024):

<img width="1511" alt="Screenshot 2024-05-03 at 10 00 50 AM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/86f85a95-2605-42d0-a885-a299cc075f3c">

- Base implementation of component for rendering generated images
- Need to add hover states for cards with necessary buttons
- Need to build out functionality

### Day 12 (04/05/2024):

<img width="1511" alt="Screenshot 2024-05-04 at 10 47 00 AM" src="https://github.com/Jamesokay/van-gogh-app/assets/78640728/0c82f802-2e25-4b0d-b43d-a9fa341961c2">

- Implemented ImageCardHoverOverlay, with various buttons for using generated images

### To Do:

- Modal for displaying generated image on select
- Add further UI elements for when Image Guidance is enabled
- Implement Recent Images state and components (dropdown in ImageGuidanceUpload)
- Mobile responsiveness
- Clean-up of styles
- Implement services for Leonardo API
