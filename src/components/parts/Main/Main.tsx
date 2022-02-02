import { useEffect, useState } from 'react';
import { loadMapApi } from '../../../utils/GoogleMapsUtils';
import './Main.scss';
import Map from '../../small-parts/Main/Map';
import Products from '../../small-parts/Main/Products';
import Events from '../../small-parts/Main/Events';

const Main = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [distanceInKm, setDistanceInKm] = useState<number>(-1);

  useEffect(() => {
    const googleMapScript = loadMapApi();
    googleMapScript.addEventListener('load', function () {
      setScriptLoaded(true);
    });
  }, []);

  const renderDistanceSentence = () => {
    return (
      <div className="distance-info">
        {`Distance between selected marker and home address is ${distanceInKm}km.`}
      </div>
    );
  };

  return (
    <main className="main">
      <Products />
      <Events />
      {scriptLoaded && (
        <Map
          mapType={google.maps.MapTypeId.SATELLITE}
          mapTypeControl={true}
          setDistanceInKm={setDistanceInKm}
        />
      )}
      {distanceInKm > -1 && renderDistanceSentence()}
    </main>
  );
};

export default Main;
