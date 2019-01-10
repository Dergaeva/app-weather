export interface Data {
  value:number,
  units:string
}
export interface Weather {
  temp:Data;
  wind_speed:Data;
  wind_gust:Data;
  observation_time:{
    value:string;
  };
}
