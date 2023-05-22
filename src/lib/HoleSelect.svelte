<script>
  import Select, { Option } from '@smui/select';
 
  const shapes = {
    'square': 'square',
    'rectangle': 'square',
    'thin rectangle': 'thin rectangle',
    'cylinder': 'circle',
    'semi-circle': 'semi-circle',
    'triangle': 'triangle',
    'arch': 'arch'
  };

  let value = 'square';

  $: correctHole = shapes[value];
</script>

<div>
  <Select
    bind:value label="What hole does this shape go into?"
    style="width: 400px"
    data-testid="select-shape"
  >
    {#each Object.keys(shapes) as shape}
      <Option value={shape}>{shape}</Option>
    {/each}
  </Select>

  <pre class="status">It goes in the {correctHole} hole!</pre>
</div>