<script>
    export let data;
  </script>
  
  <ul>
    {#each data.caregivers as cg}
      <li>{cg.fname} {cg.lname}</li>
    {/each}
  </ul>