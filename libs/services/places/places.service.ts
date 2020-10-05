import { getApiHeaders } from '../api/api.service';

import { PlacesResponseInterface } from './models/places-response.interface';

declare const process;

async function getPlaces(
  country: string,
  currency: string,
  locale: string,
  query: string
): Promise<PlacesResponseInterface> {
  const url = new URL(
    `${process.env.NX_API_PLACES_URL}/${country}/${currency}/${locale}/`
  );
  url.searchParams.set('query', query);

  const response = await fetch(url.toString(), {
    headers: getApiHeaders(),
  });
  if (response.ok) {
    return response.json();
  }
  throw response;
}

export const placesService = { getPlaces };