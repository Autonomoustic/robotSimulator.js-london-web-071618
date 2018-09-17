class Robot {
  constructor () {
    this.coordinates = [0, 0],
    this.bearing = 'north'
    this.directions = ['north', 'south', 'east', 'west']
  }

  setCoordinates (x, y) {
    this.coordinates = [x, y]
  }

  setBearing (bearing) {
    if (this.directions.includes(bearing)) {
      this.bearing = bearing
    } else {
      throw new Error('Invalid Robot Bearing')
    }
  }

  place (obj) {
    this.setBearing(obj.direction)
    this.setCoordinates(obj.x, obj.y)
  }

  turnRight () {
    if (this.bearing === 'north') {
      this.setBearing('east')
    } else if (this.bearing === 'east') {
      this.setBearing('south')
    } else if (this.bearing === 'south') {
      this.setBearing('west')
    } else if (this.bearing === 'west') {
      this.setBearing('north')
    }
  }

  turnLeft () {
    if (this.bearing === 'north') {
      this.setBearing('west')
    } else if (this.bearing === 'east') {
      this.setBearing('north')
    } else if (this.bearing === 'south') {
      this.setBearing('east')
    } else if (this.bearing === 'west') {
      this.setBearing('south')
    }
  }

  advance () {
    let x = this.coordinates[0]
    let y = this.coordinates[1]

    if (this.bearing === 'north') {
      this.setCoordinates(x, ++y)
    } else if (this.bearing === 'east') {
      this.setCoordinates(++x, y)
    } else if (this.bearing === 'south') {
      this.setCoordinates(x, --y)
    } else if (this.bearing === 'west') {
      this.setCoordinates(--x, y)
    }
  }

  translateInstructions (inst) {
    for (let char of inst) {
      if (char === 'L') {
        this.turnLeft()
      } else if (char === 'R') {
        this.turnRight()
      } else if (char === 'A') {
        this.advance()
      }
    }
  }
}
