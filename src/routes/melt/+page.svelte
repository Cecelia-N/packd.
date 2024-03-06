<script lang="ts">
  import DateRangeField from '$lib/components/UI/melt/DateRangeField.svelte';
  import DateRangePicker from '$lib/components/UI/melt/DateRangePicker.svelte';
  import Popover from '$lib/components/UI/melt/Popover.svelte';
  import RangeCalendar from '$lib/components/UI/melt/RangeCalendar.svelte';
  import type { DateValue } from '@internationlized/date';

  export let startDate: DateValue;
  export let endDate: DateValue;
</script>

<div class="bg-coral">
  <p>Start Date: {startDate}</p>
  <p>End Date: {endDate}</p>
  <p>Date Range Picker</p>
  <DateRangePicker bind:startDate bind:endDate />

  <p>Date Range Field</p>
  <DateRangeField bind:startDate bind:endDate />

  <p>Range Calendar</p>
  <RangeCalendar bind:startDate bind:endDate />

  <p>Popover</p>
  <Popover>
    <p slot="button">Click me!</p>
    <p>This is my popover!</p>
  </Popover>
</div>
