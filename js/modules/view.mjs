import Filters from './filters.mjs'
import Chart from './chart.mjs'
import Table from './table/table.mjs'

export default class View {
  constructor(state) {
    this.state = state
  }

  _reset() {

  }

  init(isRerender) {
    if (isRerender) {
      const TableView = new Table(this.state)
      TableView.init(isRerender)
    } else {
      const FilterView = new Filters(this.state.changeDateFrom, this.state.changeDateTo, this.state.dateFrom, this.state.dateTo)
      const ChartView = new Chart()
      const TableView = new Table(this.state)
  
      FilterView.init()
      ChartView.init()
      TableView.init(isRerender)
    }
  }
}