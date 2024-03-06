<script lang="ts">
  import type { DateValue } from '@internationlized/date';
  import { createDateRangeField, melt } from '@melt-ui/svelte';
  export let startDate: DateValue;
  export let endDate: DateValue;
  const {
    elements: { field, startSegment, endSegment, label },
    states: { segmentContents, value },
    options: {}
  } = createDateRangeField({
    defaultValue: {
      start: startDate,
      end: endDate
    }
  });

  $: startDate = $value.start;
  $: endDate = $value.end;
</script>

<div class="input-group">
  <span class="label" use:melt={$label}><slot name="label" /></span>
  <div class="input" use:melt={$field}>
    {#each $segmentContents.start as seg, i (i)}
      <div class="start-date" use:melt={$startSegment(seg.part)}>
        {seg.value}
      </div>
    {/each}
    <span aria-hidden="true"> - </span>
    {#each $segmentContents.end as seg, i (i)}
      <div class="field" use:melt={$endSegment(seg.part)}>
        {seg.value}
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
  .input {
    display: flex;
  }

  [data-melt-datefield-label] {
    /* styles for label */
  }

  [data-melt-datefield-label][data-invalid]::after {
    /* style invalid label */
    color: var(--dark-coral);
    content: '*';
  }
  [data-melt-datefield-field] span {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  [data-melt-datefield-field][data-invalid] {
    /* style invalid field */
    border: tomato;
  }
  [data-melt-datefield-segment]:not([data-segment='literal']) {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  [data-melt-datefield-validation] {
    align-self: self-start;
  }
</style>
