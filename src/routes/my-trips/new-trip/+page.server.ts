import { tripSchema } from "$lib/schemas";
import { fail, type Actions } from "@sveltejs/kit";
import { zod } from 'sveltekit-superforms/adapters';
import { superValidate } from "sveltekit-superforms/client";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
  const form = await superValidate(zod(tripSchema))
  return {form};
};

export const actions: Actions = {
  /**
   * Superform validation for the /new-trip form
   * @param request Request Event
   * @returns Form data, errors, and form.valid back to Superforms
   */
  default: async (request) => {
    const form = await superValidate(request, zod(tripSchema));
    
    if (!form.valid) {
      console.log('recieved invalid form')
      return fail(400, {
        form,
      })
    } else {
      console.log('recieved valid form')
      return form
    }
  }

}