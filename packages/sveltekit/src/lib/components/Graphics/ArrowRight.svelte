<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 200 200"
  width="200"
  height="200"
>
  <polyline points="70,50 130,100 70,150" />
</svg>

<style lang="scss">
  @import "../../styles/index.scss";

  svg {
    width: 200px;
    height: 200px;

    @include screen-size("phone") {
      width: 100px;
      height: 100px;
    }

    polyline {
      stroke: currentColor;
      stroke-width: 4;
      fill: none;
    }
  }
</style>
