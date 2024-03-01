<script lang="ts">
  import { createRangeCalendar, melt } from '@melt-ui/svelte';

  const {
    elements: { calendar, heading, grid, cell, prevButton, nextButton },
    states: { months, headingValue, weekdays, startValue, endValue },
    helpers: { isDateDisabled, isDateUnavailable },
    options: { fixedWeeks }
  } = createRangeCalendar();

  // set the calendar to always show 6 weeks to avoid height changes
  $fixedWeeks = true;
</script>

{$startValue} - {$endValue}
<section>
  <div class="input" use:melt={$calendar}>
    <header>
      <button use:melt={$prevButton}> ⟨ </button>
      <div use:melt={$heading}>
        {$headingValue}
      </div>
      <button use:melt={$nextButton}> ⟩ </button>
    </header>
    <div>
      {#each $months as month}
        <table use:melt={$grid}>
          <thead aria-hidden="true">
            <tr>
              {#each $weekdays as day}
                <th>
                  <div>
                    {day}
                  </div>
                </th>
              {/each}
            </tr>
          </thead>
          <tbody>
            {#each month.weeks as dates}
              <tr>
                {#each dates as date}
                  <td
                    role="gridcell"
                    aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}
                  >
                    <div use:melt={$cell(date, month.value)}>
                      {date.day}
                    </div>
                  </td>
                {/each}
              </tr>
            {/each}
          </tbody>
        </table>
      {/each}
    </div>
  </div>
</section>

<style>
  header {
    /* < PREV MONTH/YEAR NEXT > */
    display: grid;
    grid-template-columns: 0.1fr 0.8fr 0.1fr;
    justify-content: space-between;
    text-align: center;
    padding-bottom: 0.5rem;
  }
  [data-melt-calendar-heading] {
    font-weight: 600;
  }
  [data-melt-calendar-prevbutton],
  [data-melt-calendar-nextbutton] {
    background-color: transparent;
    border: none;
  }

  /* MELT DEFAULT STYLES */
  [data-melt-calendar] {
    /* @apply w-full rounded-lg bg-white p-3 text-magnum-800 shadow-sm; */
  }

  th {
    /* @apply text-sm font-semibold text-magnum-800; */

    & div {
      /* @apply flex h-6 w-6 items-center justify-center p-4; */
      height: 1rem;
      width: 1rem;
      text-align: center;
    }
  }
  [data-melt-calendar-cell][data-selected] {
    background-color: var(--coral);
  }

  [data-melt-calendar-cell] {
    cursor: pointer;
    padding: 0.3rem;
    border-radius: 30%;
    color: black;
    font-weight: 600;
  }

  [data-melt-calendar-cell]:hover,
  [data-melt-calendar-cell]:focus {
    box-shadow: 2px 2px 10px var(--creme);
  }
  [data-disabled],
  [aria-disabled] {
    opacity: 50%;
  }

  [data-melt-calendar-cell][data-outside-month='true'][data-outside-visible-months='true'] {
    opacity: 30%;
  }
</style>
