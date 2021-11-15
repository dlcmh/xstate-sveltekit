<script lang="ts">
  import NavLink from './NavLink.svelte';
  import type { Link } from './types';

  export let links: Link[];
</script>

<nav class="mt-2 mb-2">
  {#each links as { href, title }}
    <NavLink link={{ href, title }} />
  {/each}
</nav>
