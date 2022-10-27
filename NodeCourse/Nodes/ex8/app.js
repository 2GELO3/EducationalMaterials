require('dotenv').config()

const express = require('express')
const app = express()
// const articles = [{title: 'Example'}, {title: 'Example 2'}, {title: 'Example 3'}]
const Article = require('./db').Article
const bodyParser = require('body-parser')
const read = require('node-readability')

app.set('port', process.env.PORT || 3001)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/css/bootstrap.css', express.static('node_modules/bootstrap/dist/css/bootstrap.css'))

app.get('/articles', (req, res, next) => {
  Article.all((err, articles) => {
    if (err) return next(err)

    res.format({
      html: () => {
        res.render('articles.ejs', {articles: articles})
      },
      json: () => {
        res.send(articles)
      }
    })
  })
})

app.post('/articles', (req, res, next) => {
  const url = req.body.url
  read(url, (err, result) => {
    if (err || !result) res.status(500).send('Error downloading article')
    Article.create(
      {title: result.title, content: result.content},
      (err, article) => {
        if (err) return next(err)
        res.send('ok')
      }
    )
  })

  // const article = {title: req.body.title}
  // articles.push(article)
  // res.send(article)
})

app.get('/articles/:id', (req, res, next) => {
  const id = req.params.id
  Article.find(id, (err) => {
    if (err) return next(err)
    res.send(articles)
  })
})

app.delete('/articles/:id', (req, res, next) => {
  const id = req.params.id
  Article.delete(id, (err) => {
    if (err) return next(err)
    res.send({message: 'Deleted'})
  })
})

app.listen(app.get('port'), () => {
  console.log(`Web app available at http://127.0.0.1:${app.get(port)}`)
})

module.exports = app

// POST/articles
// GET/articles/:id
// GET/articles
// DELETE/articles/:id


