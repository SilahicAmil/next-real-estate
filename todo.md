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
<!-- -- Add ?status=cancel for stripe route handling ((just check if router.)) -->
<!-- -- ?status=success ((send to confirmation page)) - -->
<!-- -- Cancellation Page - Something like sorry to see you go. Let us know what we can do better. -->
<!-- -- Confirmation Page - QR Code  -->
<!-- -- Add Toast Notif for checkout ((wait 2-3 seconds before redirect))((setTimeout)) -->
<!-- -- Create Custom 404 Page -->
<!-- -- Add "Contact Form" to cancellation -->

<!-- TODO -->

-- https://supabase.com/docs/reference/javascript/filter - check this out for filtering data directly in supabase (API router filtering)

-- Add Testing

-- Add Geocoding Map ((https://docs.mapbox.com/mapbox-gl-js/example/mapbox-gl-geocoder/))

-- Add SES for sending emails from confirmation page - create email template also

-- Checkout https://github.com/resendlabs/react-email for sending emails

-- Use Jotai to replace useState

-- Add Landlord Profile ((Similiar to UtahRealEstate.com))
