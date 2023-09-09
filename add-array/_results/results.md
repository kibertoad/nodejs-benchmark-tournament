| Node    | Option       | Msecs/op       | Ops/sec     | V8                     |
| ------- | ------------ | -------------- | ----------- | ---------------------- |
| 18.17.1 | pushDestruct | 0.000405 msecs | 2470693.208 | V8 10.2.154.26-node.26 |
| 16.20.2 | pushDestruct | 0.000424 msecs | 2355844.216 | V8 9.4.146.26-node.26  |
| 20.6.1  | pushDestruct | 0.000444 msecs | 2253817.883 | V8 11.3.244.8-node.14  |
| 14.21.3 | pushDestruct | 0.000450 msecs | 2222942.699 | V8 8.4.371.23-node.88  |
| 16.20.2 | pushForEach  | 0.000593 msecs | 1686936.772 | V8 9.4.146.26-node.26  |
| 20.6.1  | pushForEach  | 0.000594 msecs | 1684676.664 | V8 11.3.244.8-node.14  |
| 20.6.1  | pushLoop     | 0.000594 msecs | 1683039.308 | V8 11.3.244.8-node.14  |
| 16.20.2 | pushLoop     | 0.000603 msecs | 1657808.731 | V8 9.4.146.26-node.26  |
| 18.17.1 | pushLoop     | 0.000621 msecs | 1610944.755 | V8 10.2.154.26-node.26 |
| 14.21.3 | pushLoop     | 0.000623 msecs | 1605808.649 | V8 8.4.371.23-node.88  |
| 14.21.3 | pushForEach  | 0.000627 msecs | 1595053.949 | V8 8.4.371.23-node.88  |
| 18.17.1 | pushForEach  | 0.000634 msecs | 1577767.867 | V8 10.2.154.26-node.26 |

**Specs**: Ryzen 7 7700X 8-Core Processor (4.50 GHz)