import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
   
    padding: 20,
    border: '5px solid red'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    textAlign: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    font: 'OCR A Std',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  value: {
    fontSize: 14,
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "100%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#bfbfbf",
    marginBottom: 10
  },
  tableHeader: {
    backgroundColor: '#457EAC',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    width: "100%"
  },
  tableRow: {
    flexDirection: 'row',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
  },
  tableCell: {
    textAlign: 'center',
    padding: 5,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#757761',
    width: "100%"
  },
});
const Invoice = ({ invoice })=> (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>Invoice</Text>
      
      </View>
      <View>
        <Text style={styles.label}>Billing To:</Text>
        <Text style={styles.value}>{invoice.customer}</Text>
        <Text style={styles.value}>{invoice.email}</Text>
        <Text style={styles.value}>{invoice.address}, {invoice.city} ,{invoice.country}</Text>
        <Text style={styles.value}>{invoice.phone}</Text>
      </View>
      
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <View style={{ ...styles.tableCell, ...styles.tableHeader }}>
            <Text>Product</Text>
          </View>
          <View style={{ ...styles.tableCell, ...styles.tableHeader }}>
            <Text>Price</Text>
          </View>
          <View style={{ ...styles.tableCell, ...styles.tableHeader }}>
            <Text>Total</Text>
          </View>
        </View>
        {invoice.items.map((item) => (
          <View key={item.product} style={styles.tableRow}>
            <View style={{ ...styles.tableCell }}>
              <Text>{item.name}</Text>
            </View>
            <View style={{ ...styles.tableCell }}>
              <Text>{item.price} x ({item.quantity})</Text>
            </View>
            <View style={{ ...styles.tableCell }}>
              <Text>{(item.price) * (item.quantity)}</Text>
            </View>
          </View>
        ))}

        

<View style={styles.tableRow}>
      <View style={{ ...styles.tableCell, ...styles.tableHeader }} >
    
      </View>
      <View style={{ ...styles.tableCell, ...styles.tableHeader }} >
   
      </View>
      <View style={{ ...styles.tableCell, ...styles.tableHeader }}>
    
      </View>
      <View style={{ ...styles.tableCell, ...styles.tableHeader }}>
   
      </View>
      
    </View>
        <View style={styles.tableRow}>

      <View style={{ ...styles.tableCell }}>
        <Text>Subtotal</Text>
      </View>
      <View style={{ ...styles.tableCell }}>
        <Text>{invoice.subtotal}</Text>
      </View>
    </View>
    <View style={styles.tableRow}>
         
      <View style={{ ...styles.tableCell }}>
        <Text>Shipping Fee</Text>
      </View>
      <View style={{ ...styles.tableCell }}>
        <Text>{invoice.shipping}</Text>
      </View>
    </View>
    <View style={styles.tableRow}>
  
      <View style={{ ...styles.tableCell }}>
        <Text>Tax </Text>
      </View>
      <View style={{ ...styles.tableCell }}>
        <Text>{invoice.tax}</Text>
      </View>
    </View>
    <View style={styles.tableRow}>

      <View style={{ ...styles.tableCell }}>
        <Text>Total</Text>
      </View>
      <View style={{ ...styles.tableCell}}>
        <Text>{invoice.total}</Text>
      </View>
    </View>
  </View>
</Page>
</Document>
);

export default Invoice;
