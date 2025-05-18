export default class RotateScript {
  speed = 90;
  update(dt) {
    // Rotate the entity 90 degrees per second around the world-space Y axis
    this.entity.rotate(0, dt * 90, 0);
    console.log(2);
  }
}

