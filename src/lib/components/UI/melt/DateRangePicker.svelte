<script lang="ts">
  import IconCalendar from '$lib/components/assets/icons/IconCalendar.svelte';
  import Popover from './Popover.svelte';
  import RangeCalendar from './RangeCalendar.svelte';
  import DateRangeField from './DateRangeField.svelte';
  import type { CalendarDate } from '@internationlized/date';
  export let startDate: CalendarDate;
  export let endDate: CalendarDate;
</script>

<section>
  <div>
    <DateRangeField bind:startDate bind:endDate />
    <div>
      <Popover>
        <span slot="button">
          <IconCalendar />
        </span>
        <RangeCalendar bind:startDate bind:endDate />
      </Popover>
    </div>
  </div>
</section>
