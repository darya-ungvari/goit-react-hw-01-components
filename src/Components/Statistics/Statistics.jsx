import s from "./statistics.module.css";
import randomColor from 'randomcolor';
import PropTypes from 'prop-types'

const Statistics = ({ stats, title }) => (
  <section className={s.statistics}>
     {title && <h2 className={s.title}>Upload stats</h2>}
    <ul className={s.statList}>
      {stats.map(stat => (
        <li class={s.item}
        style={{backgroundColor: randomColor({
          luminosity: 'light',
          hue: 'blue'
       })}}
          key={stats.id}>
          <span className={s.label}>{stat.label}</span>
          <span className={s.percentage}>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      id: PropTypes.string.isRequired,
    }),
)
}

export default Statistics;
