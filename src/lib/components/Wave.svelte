<script lang="ts">
	import { slide } from "svelte/transition";

    type Colour = 'coral' | 'dark-coral' | 'creme' | 'none';

    export let colour: Colour;
    export let waveColour: Colour;
</script>

<section class="wave-container" data-colour={colour} data-wave-colour={waveColour} in:slide={{duration: 900}}>
    <slot/>
</section>


<style>
    .wave-container { 
      position: relative;
      padding-bottom: 2rem;
      padding-top: 1rem;
      padding-left: 1rem;
    }
    
    [data-colour="coral"] {
        background-color: var(--coral);
    }
    
    [data-colour="dark-coral"] {
        background-color: var(--dark-coral);
    }
    
    [data-colour="creme"] {
        background-color: var(--creme);
    }
    
    .wave-container::before {   
      content: "";
      width: 100%;
      /* height: 85px; */
      position: absolute;
      bottom: -0.5%;
      left: 0;
      background-size: auto;
      background-repeat: repeat no-repeat;
    }
    
    [data-wave-colour="dark-coral"]::before{
        background-position: 64vw bottom;
        background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98L50 92C100 86 200 74 300 50C400 26 500 -10 600 2C700 14 800 74 900 98C1000 122 1100 110 1150 104L1200 98V134H1150C1100 134 1000 134 900 134C800 134 700 134 600 134C500 134 400 134 300 134C200 134 100 134 50 134H0V98Z' fill='%23a84528'/></svg>");
    }
    
    [data-wave-colour="creme"]::before {
        background-position: 20vw bottom;
        background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98L50 92C100 86 200 74 300 50C400 26 500 -10 600 2C700 14 800 74 900 98C1000 122 1100 110 1150 104L1200 98V134H1150C1100 134 1000 134 900 134C800 134 700 134 600 134C500 134 400 134 300 134C200 134 100 134 50 134H0V98Z' fill='%23ffffcc'/></svg>");
    }
    [data-wave-colour="coral"]::before {
        background-position: 100vw bottom;
        background-image: url("data:image/svg+xml;utf8,<svg viewBox='0 0 1200  134' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 98L50 92C100 86 200 74 300 50C400 26 500 -10 600 2C700 14 800 74 900 98C1000 122 1100 110 1150 104L1200 98V134H1150C1100 134 1000 134 900 134C800 134 700 134 600 134C500 134 400 134 300 134C200 134 100 134 50 134H0V98Z' fill='%23E3846B'/></svg>");
    }
    
      .wave-container::before {    
        height: 42.5px
      }  
    
    </style>