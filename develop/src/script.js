function generateHtml(team) {
  let template = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    </head>
    <body class="text-center vh-100">
      <h1>My Team</h1>
      <div class= "container-fluid d-flex">${team.map(employee => {
    return showInfo(employee)

  }).join('')
    }</div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
</html>
`
  return template
}
function showInfo(employee) {
  var template = `
  <div class="align-items-center card mx-3" style='max-width: 20rem'>
    <div class="card-header">${employee.name}</div>
    <div class="card-header">${employee.role}</div>
    <div class="card-body">
      <h3 class="card-title">${employee.id}</h3>
      <link class="card-text">${employee.email}</link>
      ${lastOne(employee)}
    </div>
  </div>`
  return template
}
function lastOne(employee) {
  let lastSpot = ''
  if (employee.role == 'Manager') {
    lastSpot = employee.officeNum
  }
  if (employee.role == 'Engineer') {
    lastSpot = employee.github
  }
  if (employee.role == 'Intern') {
    lastSpot = employee.school
  }
  var last = `<p class="card-text">${lastSpot}</p>`
  return last
}
module.exports = generateHtml