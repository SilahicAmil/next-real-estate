<!-- DONE -->

<!-- -- For property stuff use https://random-data-api.com/documentation - specifically /users or /addresses -->
<!-- -- Upload fake data into DB -->
<!-- -- Add filtering below Rental Header -->
<!-- -- Add Pricing and Bedrooms to supabase DB -->
<!-- -- Create Rentals Card component -->
<!-- -- Create [uid] page for rentals -->
<!-- -- Filtered States in Alphabetical order -->
<!-- -- https://supabase.com/docs/reference/javascript/eq for fetching data for specific rental on [uid] page -->
<!-- -- Implement filtering to update state in /rentals -->
<!-- -- Implement figma design layout - ((WIP)) -->
<!-- -- Create 404 Page -->
<!-- -- Create Landlord Card Component -->
<!-- -- Implement modified [uid] page from Figma (instead of all the description stuff - small desc and calendar to choose dates to "rent" and then use STRIPE API) -->
<!-- -- Add Date Range Picker on rental details page - https://github.com/wojtekmaj/react-daterange-picker -->
<!-- -- Add Stripe API  -->
<!-- -- Add checkout for stripe from date range picker component or on [uid] page -->
<!-- -- Figure out how to customize stripe API to have rental property name and price -->
<!-- -- Mapbox or Google Maps for above since we have lat and long in DB -->
<!-- -- Redo styling for /rentals to have map of right and cards on left or vice versa ((PRIORITY #1)) -->
<!-- -- Add Styling for Date Range Picker -->
<!-- -- Add Head Metadata for SEO -->
<!-- -- Add WebGL Error Handling -->
<!-- -- Update Stripe API Handling -->
<!-- -- Add Checkout Toast -->

<!-- TODO -->

-- https://supabase.com/docs/reference/javascript/filter - check this out for filtering data directly in supabase (API router filtering)

-- Confirmation email and text should be sent after checkout ((not sure how to do this yet))

-- Add Testing ((Very crucial for the STRIPE checkout stuff))

-- Add Geocoding Map ((https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/))

-- Add Data Caching ((rentals page))

-- Add ?status=cancel for stripe route handling

-- Figure out how to store checkout data ((PHP would be POG for this))

-- Use Jotai to replace useState

-- Add Toast Notif for checkout ((wait 2-3 seconds before redirect))((setTimeout))

-- Figure out how to handle if a route is unavailable like "/rentals/notValid" ((probably just create a custom 500 page or something))

-- Create Custom 404 Page

-- Add Landlord Profile ((should show the landlord information and their rentals))((Similiar to UtahRealEstate.com))

-- Upload fake images into DB (4-8 pictures)(use https://picsum.photos/ or unsplash) or just store locally
