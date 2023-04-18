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

<!-- TODO -->

-- https://supabase.com/docs/reference/javascript/filter - check this out for filtering data directly in supabase (API) instead of client side

-- Confirmation email and text should be sent after checkout ((not sure how to do this yet))

-- Add Testing ((Very crucial for the STRIPE checkout stuff))

-- Add Styling for Date Range Picker

-- Add Error Handling

-- Refactor /rentals page to have a map on the right side and list of rentals on the other side ((realtor.com look kinda of))

-- Mapbox or Google Maps for above since we have lat and long in DB

-- Add Toast Notif for checkout ((wait 2-3 seconds before redirect type beat))

-- Figure out how to handle if a route is unavailable like "/rentals/notValid" ((probably just create a custom 500 page or something))

-- Create Custom 404 Page

-- Add Landlord Profile ((hould show the landlord infrormation and their rentals))

-- Upload fake images into DB (7-10 pictures)(use https://picsum.photos/ or unsplash) or just store locally
