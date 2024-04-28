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

### Next Steps:

- Continue implementation of ImageGenerationHeader
- Implement GenerationOptions
- Mobile responsiveness
- Implement services for Leonardo API
