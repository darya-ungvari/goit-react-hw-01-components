import s from "./statistics.module.css";
// import stats from './statistical-data.json'

const Statistics = ({ stats }) => (
  <section class="statistics">
    <h2 class="title">Upload stats</h2>
    <ul class="stat-list">
      <li class="item">
        <span class="label">.docx</span>
        <span class="percentage">{stats.percentage}</span>
      </li>
      <li class="item">
        <span class="label">.mp3</span>
        <span class="percentage">{stats.percentage}</span>
      </li>
      <li class="item">
        <span class="label">.pdf</span>
        <span class="percentage">{stats.percentage}</span>
      </li>
      <li class="item">
        <span class="label">.mp4</span>
        <span class="percentage">{stats.percentage}</span>
      </li>
    </ul>
  </section>
);

export default Statistics;
