<script lang="ts">
  import { goto } from '$app/navigation';
  import { tripSchema } from '$lib/schemas';
  import { tripHandler } from '$lib/stores/tripsStore';
  import { defaults, superForm } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import type { PageData } from './$types';

  export let data: PageData;

  const defaultData = { name: 'cuba trip', startDate: '2024-02-21', endDate: '2024-02-25' };

  const { form, enhance, errors } = superForm(defaults(defaultData, zod(tripSchema)), {
    SPA: true,
    validators: zod(tripSchema),
    onUpdate: async ({ form }) => {
      if (!form.valid) {
        alert('Please ensure all fields are filled correctly');
        return;
      } else {
        console.log('requesting create trip');
        const res = await tripHandler.createTrip(form.data);
        goto('/my-trips');
      }
    },
    onSubmit: async (input) => {
      // go to create packing list
    }
  });
</script>

<form class="bg-coral" method="post" use:enhance>
  <h1>new trip</h1>
  <label for="name">Trip name</label>
  {#if $errors?.name}<p class="error">{$errors?.name}</p>{/if}
  <input
    type="text"
    name="name"
    bind:value={$form.name}
    aria-invalid={$errors.name ? 'true' : undefined}
  />

  <label for="startDate">Start date</label>
  {#if $errors?.startDate}<p class="error">{$errors?.startDate}</p>{/if}
  <input type="date" name="startDate" bind:value={$form.startDate} />

  <label for="endDate">End date</label>
  {#if $errors?.endDate}<p class="error">{$errors?.endDate}</p>{/if}
  <input type="date" name="endDate" bind:value={$form.endDate} />

  <button type="submit">create trip</button>
</form>

<style>
  form {
    display: grid;
  }
  input {
    border-radius: 0.3rem;
    border: none;
    box-shadow: 2px 2px 2px var(--shadow);
  }

  input:focus {
    box-shadow: 2px 2px 10px var(--creme);
    border: none;
  }
</style>
