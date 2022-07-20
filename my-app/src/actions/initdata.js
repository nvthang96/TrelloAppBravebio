export const initData  = {
    board:[
        {
            id:'board-1',
            columnOrder:['column-1','column-2','column-3',],
            columns:[
                {
                    id:'column-1',
                    boradID:'board-1',
                    title:'Todo-1',
                    cardOrder:['card-1','card-2','card-3','card-4'],
                    cards:[
                        {
                            id:'card-1',
                            boardID:'board-1',
                            columnID:'columns-1',
                            title:'Tittle'
                        },
                        {
                            id:'card-2',
                            boardID:'board-1',
                            columnID:'columns-1',
                            title:'Tittle'
                        },
                        {
                            id:'card-3',
                            boardID:'board-1',
                            columnID:'columns-1',
                            title:'Tittle'
                        },
                        {
                            id:'card-4',
                            boardID:'board-1',
                            columnID:'columns-1',
                            title:'Tittle'
                        },
                     
                        
                    ]
                },
                {
                    id:'column-2',
                    boradID:'board-1',
                    title:'Todo-2',
                    cardOrder:['card-5','card-6'],
                    cards:[
                            {
                                id:'card-1',
                                boardID:'board-1',
                                columnID:'columns-2',
                                title:'Tittle 2'
                            },
                            {
                                id:'card-2',
                                boardID:'board-1',
                                columnID:'columns-2',
                                title:'Tittle 2'
                            }
                       
                        
                          ]
                }
                ,
                {
                    id:'column-3',
                    boradID:'board-1',
                    title:'Todo-3',
                    cardOrder:['card-7','card-8','card-9'],
                    cards:[
                        {
                            id:'card-1',
                            boardID:'board-1',
                            columnID:'columns-3',
                            title:'Tittle 3'
                        },
                        {
                            id:'card-2',
                            boardID:'board-1',
                            columnID:'columns-3',
                            title:'Tittle 3'
                        },
                        {
                            id:'card-3',
                            boardID:'board-1',
                            columnID:'columns-3',
                            title:'Tittle 3'
                        },
                   
                        
                    ]
                }
            ]
        }
    ]
}