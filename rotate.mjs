export default class RotateScript {
  update(dt) {
    // Rotate the entity 90 degrees per second around the world-space Y axis
    this.entity.rotate(0, dt * 90, 0);
  }
}

