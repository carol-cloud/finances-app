const TransactionModel = require ('../models/TransactionModel.js');
const express = require('express');
const transactionRouter = express.Router();

// CREATE
transactionRouter.post('/', async (req,res) => {
    try {
        const transaction = new TransactionModel(req.body);
        await transaction.save();
        res.send(transaction);
    } catch (error) {
        res.status(500).send(error);
    }
  });
  
  // RETRIEVE
  transactionRouter.get('/', async (req, res) => {
      try {
          const {period} = req.query;
          if(period) {
            const transactions = await TransactionModel.find({'yearMonth': period});
            res.send(transactions);
          } else {
              res.status(400).send({error: 'É necessário informar o parâmetro \"period\",cujo valor deve estar no formato yyyy-mm'})
          }
          
      } catch (error) {
          res.status(500).send(error);
      }
  });
  
//   // UPDATE
  transactionRouter.patch('/:id', async (req, res) => {
      try {
          const id = req.params.id;
  
          const transaction = await TransactionModel.findByIdAndUpdate(
              {_id: id}, 
              req.body, 
              {
              new: true,
              }
          );
          res.send(transaction);
      } catch (error) {
          res.status(500).send(error);
      }
  });
  
//   // DELETE 
  
  transactionRouter.delete('/:id', async (req, res) => {
      try {
          const transaction = await TransactionModel.findByIdAndDelete({_id: req.params.id});
        res.status(200).send('Usuário deletado');
      } catch (error) {
          res.status(400).send('Transação nao encontrada na colecao');
      }
  });

module.exports = transactionRouter;
