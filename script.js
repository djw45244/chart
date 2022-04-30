    google.charts.load('current', {
      'packages': ['gantt']
    });
    google.charts.setOnLoadCallback(drawChart);

    function daysToMilliseconds(days) {
      return days * 24 * 60 * 60 * 1000;
    }

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Task ID');
      data.addColumn('string', 'Task Name');
      data.addColumn('string', 'Resource');
      data.addColumn('date', 'Start Date');
      data.addColumn('date', 'End Date');
      data.addColumn('number', 'Duration');
      data.addColumn('number', 'Percent Complete');
      data.addColumn('string', 'Dependencies');
      data.addColumn('string', 'URL');
      

      data.addRows([

        ['Interview2', 'Internal Interviews (Pt.2)', 'informal data',
          new Date(2021, 5, 30), new Date(2021, 6, 7), null, 0, 'Interview1','https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_33'
        ],
        ['Interview1', 'Internal Interview (Pt.1)', 'informal data',
          new Date(2021, 5, 23), new Date(2021, 5, 28), null, 20, null,'https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_24'
        ],
        ['Proposal1', 'Formal Collection Process (Jenny)', 'formal data',
          new Date(2021, 5, 21), new Date(2021, 7, 29), null, 10, null,'https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gdde9dbaad4_0_180'
        ],
        ['Interview3', 'Internal CTA Interviews', 'informal data',
          new Date(2021, 6, 8), new Date(2021, 6, 21), null, 0, 'Interview2','https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_59'
        ],
        ['Interface1', 'Interface Prototype (Adobe XD)', 'experimentation',
          new Date(2021, 5, 21), new Date(2021, 5, 28), null, 0, null,'https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_15'
        ],
        ['Interface2', 'Interface Prototype (AWS Honeycode)', 'experimentation',
          new Date(2021, 5, 29), new Date(2021, 6, 13), null, 0, 'Interface1','https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_41'
        ],
        ['Interface3', 'Chatbot Experimentation (AWS Lex)', 'experimentation',
          new Date(2021, 6, 14), new Date(2021, 6, 28), null, 0, 'Interface2','https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_75'
        ],
        ['Proposal2', 'Seminar Video (Pt.1)', 'formal data',
          new Date(2021, 6, 4), new Date(2021, 6, 18), null, 0, null,'https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_50'
        ],
        ['Proposal3', 'Seminar Video (Pt.2)', 'formal data',
          new Date(2021, 6, 22), new Date(2021, 7, 6), null, 0, 'Interview3','https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_67'
        ],
        ['Interface4', 'Interface Prototype (Unity)', 'experimentation',
          new Date(2021, 6, 29), new Date(2021, 7, 11), null, 0, null,'https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_84'
        ],
        ['Wrapup', 'Article Write-up', 'experimentation',
          new Date(2021, 7, 12), new Date(2021, 7, 20), null, 0, 'Interface2,Interface3,Interface4','https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_93'
        ],
        ['Proposal4', 'Hand-off Slides', 'formal data',
          new Date(2021, 7, 20), new Date(2021, 7, 30), null, 0, 'Proposal2,Proposal3,Interview3','https://docs.google.com/presentation/d/1hJAW8PssRl0to6L9OdcXjgTndI6zAgeUeEb7TjJhqvg/edit#slide=id.gddf7d42b4f_0_101'
        ]
      ]);
			
      var options = {
        height: 600,
				gantt: {
          criticalPathEnabled: false,
          innerGridHorizLine: {
            stroke: '#C5BCF8',
            strokeWidth: 1
          },
          labelStyle: {
          	fontSize: 11
            }
          }
        
        
      };

      var chart = new google.visualization.Gantt(document.getElementById('chart_div'));
      
        // The select handler. Call the chart's getSelection() method
  function selectHandler() {
    var selectedItem = chart.getSelection()[0];
    if (selectedItem) {
      var value = data.getFormattedValue(selectedItem.row, 8);
      

      window.open(value, '_blank');
    }
  }

  // Listen for the 'select' event, and call my function selectHandler() when
  // the user selects something on the chart.
  google.visualization.events.addListener(chart, 'select', selectHandler);

      chart.draw(data, options);
    }
