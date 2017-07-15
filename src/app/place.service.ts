import {Injectable} from '@angular/core'
import {PLACES} from './mock-places'

@Injectable()
export class PlaceService {

  getPlaces(){
    return PLACES;
  }

}
