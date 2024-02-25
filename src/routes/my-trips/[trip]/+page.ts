import { tripHandler } from '$lib/stores/tripsStore';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const tripId = params.trip
  const trip = await tripHandler.getTrip(tripId)
  return {
    id: tripId,
    trip
  };
}) satisfies PageLoad;