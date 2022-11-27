export class RoverEntity {
  entity: PhotosEntity[];
}

export class PhotosEntity {
  id: number;
  sol: number;
  camera: CameraEntity;
  img_src: string;
  earth_date: string;
  rover: RoversEntity;
}

export class CameraEntity {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

export class RoversEntity {
  id: number;
  name: string;
  landing_date: string;
  launch_date: string;
  status: string;
}
