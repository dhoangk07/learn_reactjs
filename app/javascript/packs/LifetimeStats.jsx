import React from 'react'

const LifetimeStats = ({lifetimeStats}) =>
  <div className="panel panel-default">
    <div className="panel-heading"><h4>Lifetime Stats</h4></div>
    <div className="panel-body">
      <h4>Distance</h4>
      <p>Total: {lifetimeStats.lifetime.total.distance} miles</p>
      <h4>Steps</h4>
      <p>Total: {lifetimeStats.lifetime.total.steps}</p>
    </div>
  </div>

export default LifetimeStats