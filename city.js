var divStyle = {
    backgroundImage: 'url("http://jmvtestsite.com/wp-content/uploads/2016/07/cityscape7.jpg")',
    height: "100%",
    width: "75%",
    fontFamily: "Arial",
    fontSize: "35px",
    fontWeight: "bold",
    WebkitTransition: 'all',
    msTransition: 'all'
 };

var countryStyle = {
    border: "2px solid purple",
    display: "block",
    marginTop: "50px",
    marginLeft: '50px',
    fontFamily: "Righteous",
    fontSize: "30px",
    WebkitTransition: 'all',
    msTransition: 'all'
 };

var regionStyle = {
    display: "block",
    fontSize: "25px",
    marginLeft: '75px',
    WebkitTransition: 'all',
    msTransition: 'all'
 };

var cityStyle = {
    display: "block",
    height: "100px",
    width: "100px",
    fontSize: "20px",
    marginLeft: '200px',
    WebkitTransition: 'all',
    msTransition: 'all'
 };


var data = {
  countries: [
    {
      name: 'Canada',
      regions: [
        {
          name: 'Alberta',
          cities: [
            {
              name: 'Calgary'
            },
            {
              name: 'Edmonton'
            }
          ]
        },
        {
          name: 'British Columbia',
          cities: [
            {
              name: 'Vancouver'
            },
            {
              name: 'Victoria'
            }
          ]
        }
      ]
    },
    {
      name: 'USA',
      regions: [
        {
          name: 'Iowa',
          cities: [
            {
              name: 'Ames'
            },
            {
              name: 'Iowa City'
            }
          ]
        },
        {
          name: 'Minnesota',
          cities: [
            {
              name: 'Minneapolis'
            },
            {
              name: 'St. Paul'
            }
          ]
        }
      ]
    }
  ]
};

class City extends React.Component {
      render() {

            return (

              <div style={regionStyle}>
                <h2>
                  {this.props.name}
                </h2>
              </div>
            );
      }
    }


class Region extends React.Component {

  render() {
      return (
        <div style={regionStyle}>
          <h2>
            {this.props.name}
              </h2>
               {this.props.cities.map(function(city) {
                  return (
                    <City name={city.name} />
                  )
                })}
        </div>
      );
  }
}

class Country extends React.Component {
      render() {
          return (
            <div style={countryStyle}>
               <h2>
               {this.props.name}
               </h2>
                {this.props.regions.map(function(region) {
                  return (
                    <Region name={region.name} cities={region.cities}/>
                  )
                })}
            </div>
          )
      }
}


class App extends React.Component {

    render() {
      return (
        <div style={divStyle}>
          <h2>City Finder</h2>
          {this.props.data.countries.map(function(country) {
            return (
              <Country name={country.name} regions={country.regions}/>
            )
          })}
        </div>
      );
    }
  };

    ReactDOM.render(
      <App data={data} />,
      document.getElementById('container')
);
