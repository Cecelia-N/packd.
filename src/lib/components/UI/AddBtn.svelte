<script lang="ts">
  export let text: string = '';
  export let onClick: CallableFunction;
</script>

<button
  type="button"
  on:click={() => {
    onClick();
  }}
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
    <path
      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
    />
  </svg>
  {text}
</button>

<style>
  svg {
    fill: var(--dark-coral);
    width: 1rem;
    margin-right: 0.2rem;
  }
  button {
    display: flex;
    background-color: var(--creme);
    color: var(--dark-coral);
    border: none;
    box-shadow: 2px 2px 5px var(--shadow);
    border-radius: 0.7rem;
    text-shadow: 1px 1px 2px var(--creme);
  }
</style>
