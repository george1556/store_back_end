exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("transactions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("transactions").insert([
        { movie_id: 4, customer_id: 179, price: "$15.31" },
        { movie_id: 18, customer_id: 78, price: "$20.66" },
        { movie_id: 40, customer_id: 179, price: "$5.17" },
        { movie_id: 15, customer_id: 26, price: "$8.52" },
        { movie_id: 36, customer_id: 65, price: "$6.34" },
        { movie_id: 29, customer_id: 29, price: "$13.84" },
        { movie_id: 21, customer_id: 157, price: "$26.21" },
        { movie_id: 19, customer_id: 152, price: "$20.90" },
        { movie_id: 16, customer_id: 83, price: "$27.09" },
        { movie_id: 33, customer_id: 59, price: "$20.04" },
        { movie_id: 10, customer_id: 123, price: "$23.64" },
        { movie_id: 11, customer_id: 66, price: "$24.13" },
        { movie_id: 38, customer_id: 124, price: "$28.55" },
        { movie_id: 27, customer_id: 90, price: "$28.06" },
        { movie_id: 36, customer_id: 57, price: "$12.55" },
        { movie_id: 30, customer_id: 137, price: "$25.83" },
        { movie_id: 11, customer_id: 118, price: "$13.42" },
        { movie_id: 34, customer_id: 135, price: "$19.58" },
        { movie_id: 22, customer_id: 91, price: "$6.97" },
        { movie_id: 11, customer_id: 180, price: "$22.79" },
        { movie_id: 14, customer_id: 98, price: "$17.31" },
        { movie_id: 41, customer_id: 25, price: "$19.45" },
        { movie_id: 21, customer_id: 74, price: "$13.10" },
        { movie_id: 50, customer_id: 164, price: "$5.44" },
        { movie_id: 24, customer_id: 191, price: "$7.07" },
        { movie_id: 44, customer_id: 3, price: "$27.29" },
        { movie_id: 8, customer_id: 98, price: "$23.26" },
        { movie_id: 19, customer_id: 66, price: "$13.87" },
        { movie_id: 18, customer_id: 164, price: "$10.10" },
        { movie_id: 24, customer_id: 152, price: "$11.87" },
        { movie_id: 36, customer_id: 27, price: "$26.70" },
        { movie_id: 1, customer_id: 72, price: "$11.12" },
        { movie_id: 1, customer_id: 64, price: "$18.41" },
        { movie_id: 6, customer_id: 3, price: "$22.98" },
        { movie_id: 11, customer_id: 155, price: "$15.90" },
        { movie_id: 39, customer_id: 103, price: "$26.28" },
        { movie_id: 15, customer_id: 184, price: "$23.56" },
        { movie_id: 26, customer_id: 30, price: "$20.19" },
        { movie_id: 15, customer_id: 5, price: "$10.36" },
        { movie_id: 45, customer_id: 10, price: "$16.08" },
        { movie_id: 46, customer_id: 138, price: "$11.26" },
        { movie_id: 7, customer_id: 117, price: "$18.99" },
        { movie_id: 9, customer_id: 93, price: "$6.37" },
        { movie_id: 39, customer_id: 174, price: "$19.06" },
        { movie_id: 40, customer_id: 101, price: "$28.79" },
        { movie_id: 49, customer_id: 126, price: "$13.08" },
        { movie_id: 45, customer_id: 106, price: "$9.84" },
        { movie_id: 10, customer_id: 67, price: "$5.33" },
        { movie_id: 45, customer_id: 135, price: "$11.59" },
        { movie_id: 22, customer_id: 18, price: "$18.79" },
        { movie_id: 41, customer_id: 96, price: "$6.93" },
        { movie_id: 11, customer_id: 181, price: "$22.56" },
        { movie_id: 34, customer_id: 141, price: "$8.72" },
        { movie_id: 11, customer_id: 12, price: "$19.49" },
        { movie_id: 17, customer_id: 117, price: "$10.10" },
        { movie_id: 30, customer_id: 122, price: "$18.60" },
        { movie_id: 22, customer_id: 74, price: "$14.32" },
        { movie_id: 20, customer_id: 59, price: "$10.44" },
        { movie_id: 46, customer_id: 73, price: "$23.52" },
        { movie_id: 34, customer_id: 49, price: "$24.64" },
        { movie_id: 29, customer_id: 148, price: "$21.45" },
        { movie_id: 18, customer_id: 12, price: "$9.11" },
        { movie_id: 22, customer_id: 163, price: "$9.23" },
        { movie_id: 41, customer_id: 33, price: "$29.60" },
        { movie_id: 5, customer_id: 130, price: "$6.68" },
        { movie_id: 9, customer_id: 70, price: "$28.98" },
        { movie_id: 47, customer_id: 45, price: "$29.02" },
        { movie_id: 23, customer_id: 50, price: "$13.93" },
        { movie_id: 10, customer_id: 88, price: "$21.28" },
        { movie_id: 19, customer_id: 92, price: "$28.86" },
        { movie_id: 18, customer_id: 56, price: "$12.21" },
        { movie_id: 29, customer_id: 16, price: "$25.03" },
        { movie_id: 45, customer_id: 103, price: "$25.65" },
        { movie_id: 28, customer_id: 185, price: "$21.38" },
        { movie_id: 49, customer_id: 86, price: "$29.63" },
        { movie_id: 13, customer_id: 44, price: "$20.10" },
        { movie_id: 22, customer_id: 7, price: "$20.40" },
        { movie_id: 24, customer_id: 180, price: "$27.50" },
        { movie_id: 3, customer_id: 115, price: "$22.91" },
        { movie_id: 37, customer_id: 198, price: "$13.96" },
        { movie_id: 41, customer_id: 107, price: "$23.33" },
        { movie_id: 25, customer_id: 175, price: "$7.38" },
        { movie_id: 12, customer_id: 45, price: "$26.69" },
        { movie_id: 14, customer_id: 96, price: "$23.83" },
        { movie_id: 7, customer_id: 164, price: "$8.30" },
        { movie_id: 43, customer_id: 39, price: "$18.42" },
        { movie_id: 24, customer_id: 45, price: "$23.37" },
        { movie_id: 48, customer_id: 149, price: "$23.18" },
        { movie_id: 24, customer_id: 150, price: "$15.46" },
        { movie_id: 41, customer_id: 119, price: "$22.31" },
        { movie_id: 13, customer_id: 160, price: "$22.44" },
        { movie_id: 25, customer_id: 154, price: "$28.55" },
        { movie_id: 10, customer_id: 2, price: "$27.26" },
        { movie_id: 32, customer_id: 28, price: "$14.98" },
        { movie_id: 33, customer_id: 103, price: "$27.24" },
        { movie_id: 48, customer_id: 80, price: "$25.98" },
        { movie_id: 32, customer_id: 171, price: "$6.39" },
        { movie_id: 2, customer_id: 137, price: "$24.85" },
        { movie_id: 1, customer_id: 142, price: "$13.55" },
        { movie_id: 14, customer_id: 150, price: "$7.97" },
        { movie_id: 6, customer_id: 126, price: "$29.96" },
        { movie_id: 27, customer_id: 133, price: "$5.00" },
        { movie_id: 36, customer_id: 10, price: "$11.53" },
        { movie_id: 16, customer_id: 100, price: "$5.45" },
        { movie_id: 11, customer_id: 50, price: "$15.13" },
        { movie_id: 38, customer_id: 176, price: "$24.65" },
        { movie_id: 30, customer_id: 146, price: "$6.42" },
        { movie_id: 3, customer_id: 113, price: "$26.62" },
        { movie_id: 5, customer_id: 133, price: "$8.31" },
        { movie_id: 25, customer_id: 89, price: "$23.12" },
        { movie_id: 29, customer_id: 138, price: "$29.84" },
        { movie_id: 33, customer_id: 80, price: "$11.60" },
        { movie_id: 31, customer_id: 127, price: "$14.83" },
        { movie_id: 34, customer_id: 92, price: "$6.17" },
        { movie_id: 5, customer_id: 125, price: "$29.35" },
        { movie_id: 38, customer_id: 70, price: "$14.36" },
        { movie_id: 15, customer_id: 41, price: "$17.30" },
        { movie_id: 9, customer_id: 96, price: "$22.33" },
        { movie_id: 10, customer_id: 124, price: "$24.20" },
        { movie_id: 21, customer_id: 104, price: "$24.61" },
        { movie_id: 45, customer_id: 26, price: "$6.66" },
        { movie_id: 46, customer_id: 64, price: "$23.56" },
        { movie_id: 7, customer_id: 27, price: "$19.11" },
        { movie_id: 1, customer_id: 193, price: "$25.16" },
        { movie_id: 39, customer_id: 189, price: "$19.29" },
        { movie_id: 24, customer_id: 87, price: "$20.50" },
        { movie_id: 28, customer_id: 90, price: "$18.41" },
        { movie_id: 15, customer_id: 117, price: "$8.01" },
        { movie_id: 50, customer_id: 43, price: "$9.31" },
        { movie_id: 18, customer_id: 32, price: "$15.62" },
        { movie_id: 15, customer_id: 103, price: "$16.99" },
        { movie_id: 28, customer_id: 72, price: "$11.74" },
        { movie_id: 20, customer_id: 79, price: "$27.24" },
        { movie_id: 8, customer_id: 154, price: "$7.89" },
        { movie_id: 26, customer_id: 81, price: "$24.76" },
        { movie_id: 48, customer_id: 2, price: "$19.43" },
        { movie_id: 19, customer_id: 2, price: "$6.95" },
        { movie_id: 46, customer_id: 14, price: "$29.70" },
        { movie_id: 3, customer_id: 90, price: "$12.76" },
        { movie_id: 18, customer_id: 94, price: "$15.77" },
        { movie_id: 6, customer_id: 21, price: "$13.64" },
        { movie_id: 21, customer_id: 165, price: "$27.09" },
        { movie_id: 34, customer_id: 1, price: "$29.03" },
        { movie_id: 13, customer_id: 20, price: "$7.90" },
        { movie_id: 42, customer_id: 151, price: "$9.68" },
        { movie_id: 31, customer_id: 20, price: "$22.40" },
        { movie_id: 12, customer_id: 94, price: "$18.23" },
        { movie_id: 24, customer_id: 39, price: "$29.10" },
        { movie_id: 4, customer_id: 99, price: "$8.78" },
        { movie_id: 35, customer_id: 30, price: "$15.76" },
        { movie_id: 5, customer_id: 94, price: "$19.94" },
        { movie_id: 12, customer_id: 87, price: "$20.28" },
        { movie_id: 25, customer_id: 113, price: "$25.23" },
        { movie_id: 6, customer_id: 133, price: "$22.30" },
        { movie_id: 49, customer_id: 197, price: "$24.51" },
        { movie_id: 20, customer_id: 32, price: "$17.96" },
        { movie_id: 48, customer_id: 106, price: "$12.32" },
        { movie_id: 39, customer_id: 117, price: "$18.83" },
        { movie_id: 10, customer_id: 197, price: "$29.29" },
        { movie_id: 15, customer_id: 43, price: "$21.16" },
        { movie_id: 21, customer_id: 55, price: "$22.67" },
        { movie_id: 26, customer_id: 113, price: "$11.96" },
        { movie_id: 39, customer_id: 89, price: "$29.74" },
        { movie_id: 4, customer_id: 90, price: "$9.57" },
        { movie_id: 40, customer_id: 183, price: "$16.61" },
        { movie_id: 19, customer_id: 29, price: "$23.77" },
        { movie_id: 33, customer_id: 113, price: "$25.28" },
        { movie_id: 38, customer_id: 57, price: "$8.99" },
        { movie_id: 11, customer_id: 163, price: "$24.49" },
        { movie_id: 47, customer_id: 91, price: "$28.11" },
        { movie_id: 39, customer_id: 118, price: "$23.39" },
        { movie_id: 43, customer_id: 5, price: "$22.03" },
        { movie_id: 2, customer_id: 8, price: "$8.60" },
        { movie_id: 1, customer_id: 177, price: "$24.13" },
        { movie_id: 31, customer_id: 142, price: "$21.70" },
        { movie_id: 4, customer_id: 195, price: "$8.49" },
        { movie_id: 31, customer_id: 105, price: "$22.53" },
        { movie_id: 26, customer_id: 60, price: "$24.71" },
        { movie_id: 40, customer_id: 155, price: "$24.06" },
        { movie_id: 15, customer_id: 46, price: "$16.20" },
        { movie_id: 16, customer_id: 38, price: "$14.83" },
        { movie_id: 42, customer_id: 23, price: "$11.20" },
        { movie_id: 41, customer_id: 91, price: "$8.19" },
        { movie_id: 38, customer_id: 150, price: "$11.02" },
        { movie_id: 36, customer_id: 118, price: "$6.85" },
        { movie_id: 32, customer_id: 102, price: "$27.86" },
        { movie_id: 22, customer_id: 129, price: "$23.88" },
        { movie_id: 33, customer_id: 83, price: "$12.50" },
        { movie_id: 25, customer_id: 6, price: "$14.40" },
        { movie_id: 13, customer_id: 82, price: "$28.04" },
        { movie_id: 12, customer_id: 188, price: "$28.01" },
        { movie_id: 24, customer_id: 1, price: "$6.65" },
        { movie_id: 15, customer_id: 51, price: "$28.27" },
        { movie_id: 10, customer_id: 98, price: "$29.25" },
        { movie_id: 12, customer_id: 175, price: "$13.90" },
        { movie_id: 39, customer_id: 111, price: "$12.49" },
        { movie_id: 39, customer_id: 73, price: "$28.40" },
        { movie_id: 19, customer_id: 60, price: "$29.86" },
        { movie_id: 49, customer_id: 108, price: "$28.50" },
        { movie_id: 27, customer_id: 156, price: "$21.50" },
        { movie_id: 16, customer_id: 114, price: "$20.89" },
        { movie_id: 26, customer_id: 55, price: "$21.24" },
        { movie_id: 10, customer_id: 106, price: "$24.25" },
        { movie_id: 21, customer_id: 5, price: "$5.40" },
        { movie_id: 43, customer_id: 26, price: "$20.10" },
        { movie_id: 21, customer_id: 1, price: "$29.94" },
        { movie_id: 44, customer_id: 81, price: "$12.37" },
        { movie_id: 2, customer_id: 147, price: "$20.18" },
        { movie_id: 47, customer_id: 27, price: "$13.78" },
        { movie_id: 4, customer_id: 24, price: "$14.33" },
        { movie_id: 12, customer_id: 62, price: "$13.24" },
        { movie_id: 13, customer_id: 20, price: "$22.73" },
        { movie_id: 37, customer_id: 134, price: "$18.16" },
        { movie_id: 19, customer_id: 98, price: "$12.66" },
        { movie_id: 39, customer_id: 153, price: "$10.84" },
        { movie_id: 32, customer_id: 160, price: "$15.49" },
        { movie_id: 28, customer_id: 83, price: "$5.22" },
        { movie_id: 23, customer_id: 138, price: "$8.88" },
        { movie_id: 1, customer_id: 49, price: "$13.70" },
        { movie_id: 43, customer_id: 121, price: "$10.26" },
        { movie_id: 46, customer_id: 173, price: "$20.94" },
        { movie_id: 49, customer_id: 173, price: "$14.11" },
        { movie_id: 20, customer_id: 11, price: "$10.99" },
        { movie_id: 24, customer_id: 169, price: "$6.16" },
        { movie_id: 23, customer_id: 30, price: "$22.68" },
        { movie_id: 41, customer_id: 56, price: "$21.87" },
        { movie_id: 18, customer_id: 139, price: "$12.68" },
        { movie_id: 19, customer_id: 50, price: "$23.80" },
        { movie_id: 7, customer_id: 57, price: "$21.01" },
        { movie_id: 24, customer_id: 67, price: "$16.91" },
        { movie_id: 9, customer_id: 12, price: "$9.49" },
        { movie_id: 23, customer_id: 76, price: "$24.80" },
        { movie_id: 38, customer_id: 173, price: "$9.11" },
        { movie_id: 21, customer_id: 17, price: "$19.33" },
        { movie_id: 21, customer_id: 32, price: "$14.67" },
        { movie_id: 27, customer_id: 10, price: "$19.37" },
        { movie_id: 24, customer_id: 43, price: "$29.62" },
        { movie_id: 31, customer_id: 164, price: "$17.83" },
        { movie_id: 5, customer_id: 63, price: "$19.59" },
        { movie_id: 15, customer_id: 132, price: "$15.80" },
        { movie_id: 46, customer_id: 6, price: "$27.72" },
        { movie_id: 5, customer_id: 183, price: "$6.17" },
        { movie_id: 47, customer_id: 146, price: "$17.18" },
        { movie_id: 15, customer_id: 150, price: "$29.97" },
        { movie_id: 15, customer_id: 70, price: "$5.38" },
        { movie_id: 11, customer_id: 91, price: "$29.13" },
        { movie_id: 7, customer_id: 67, price: "$13.60" },
        { movie_id: 23, customer_id: 156, price: "$15.40" },
        { movie_id: 24, customer_id: 122, price: "$17.04" },
        { movie_id: 11, customer_id: 65, price: "$6.83" },
        { movie_id: 19, customer_id: 13, price: "$28.95" },
        { movie_id: 26, customer_id: 199, price: "$26.00" },
        { movie_id: 12, customer_id: 79, price: "$20.54" },
        { movie_id: 43, customer_id: 8, price: "$10.73" },
        { movie_id: 40, customer_id: 41, price: "$23.87" },
        { movie_id: 37, customer_id: 69, price: "$16.65" },
        { movie_id: 38, customer_id: 32, price: "$12.66" },
        { movie_id: 20, customer_id: 171, price: "$15.41" },
        { movie_id: 30, customer_id: 139, price: "$28.06" },
        { movie_id: 22, customer_id: 66, price: "$25.16" },
        { movie_id: 36, customer_id: 32, price: "$23.04" },
        { movie_id: 12, customer_id: 90, price: "$7.36" },
        { movie_id: 3, customer_id: 193, price: "$25.96" },
        { movie_id: 44, customer_id: 80, price: "$6.80" },
        { movie_id: 29, customer_id: 6, price: "$13.83" },
        { movie_id: 48, customer_id: 17, price: "$28.28" },
        { movie_id: 14, customer_id: 83, price: "$15.07" },
        { movie_id: 36, customer_id: 67, price: "$9.49" },
        { movie_id: 26, customer_id: 112, price: "$19.50" },
        { movie_id: 39, customer_id: 57, price: "$28.59" },
        { movie_id: 47, customer_id: 150, price: "$19.38" },
        { movie_id: 39, customer_id: 107, price: "$15.03" },
        { movie_id: 19, customer_id: 193, price: "$13.97" },
        { movie_id: 38, customer_id: 142, price: "$29.10" },
        { movie_id: 21, customer_id: 44, price: "$27.14" },
        { movie_id: 25, customer_id: 65, price: "$13.29" },
        { movie_id: 18, customer_id: 23, price: "$20.74" },
        { movie_id: 38, customer_id: 196, price: "$7.82" },
        { movie_id: 34, customer_id: 146, price: "$5.32" },
        { movie_id: 49, customer_id: 60, price: "$22.42" },
        { movie_id: 6, customer_id: 77, price: "$14.70" },
        { movie_id: 35, customer_id: 190, price: "$20.35" },
        { movie_id: 34, customer_id: 111, price: "$21.46" },
        { movie_id: 29, customer_id: 84, price: "$14.12" },
        { movie_id: 10, customer_id: 13, price: "$7.82" },
        { movie_id: 12, customer_id: 127, price: "$13.13" },
        { movie_id: 10, customer_id: 158, price: "$7.70" },
        { movie_id: 23, customer_id: 15, price: "$28.73" },
        { movie_id: 2, customer_id: 154, price: "$6.50" },
        { movie_id: 49, customer_id: 54, price: "$27.46" },
        { movie_id: 46, customer_id: 174, price: "$5.91" },
        { movie_id: 15, customer_id: 91, price: "$28.97" },
        { movie_id: 6, customer_id: 152, price: "$12.50" },
        { movie_id: 14, customer_id: 149, price: "$10.66" },
        { movie_id: 25, customer_id: 155, price: "$12.72" },
        { movie_id: 42, customer_id: 176, price: "$29.98" },
        { movie_id: 16, customer_id: 95, price: "$26.94" },
        { movie_id: 12, customer_id: 166, price: "$7.38" },
        { movie_id: 5, customer_id: 184, price: "$26.37" },
        { movie_id: 34, customer_id: 156, price: "$10.32" },
        { movie_id: 8, customer_id: 183, price: "$9.51" },
        { movie_id: 42, customer_id: 2, price: "$18.45" },
        { movie_id: 31, customer_id: 92, price: "$11.63" },
        { movie_id: 30, customer_id: 177, price: "$6.11" },
        { movie_id: 5, customer_id: 151, price: "$5.05" },
        { movie_id: 42, customer_id: 17, price: "$19.66" },
        { movie_id: 34, customer_id: 160, price: "$16.55" },
        { movie_id: 19, customer_id: 27, price: "$9.73" },
        { movie_id: 42, customer_id: 191, price: "$25.07" },
        { movie_id: 50, customer_id: 155, price: "$23.09" },
        { movie_id: 28, customer_id: 165, price: "$11.61" },
        { movie_id: 3, customer_id: 160, price: "$15.70" },
        { movie_id: 5, customer_id: 117, price: "$9.62" },
        { movie_id: 44, customer_id: 82, price: "$19.87" },
        { movie_id: 11, customer_id: 27, price: "$5.12" },
        { movie_id: 24, customer_id: 142, price: "$13.16" },
        { movie_id: 46, customer_id: 199, price: "$24.38" },
        { movie_id: 33, customer_id: 167, price: "$9.79" },
        { movie_id: 30, customer_id: 138, price: "$29.48" },
        { movie_id: 23, customer_id: 63, price: "$11.73" },
        { movie_id: 8, customer_id: 84, price: "$25.67" },
        { movie_id: 11, customer_id: 9, price: "$6.60" },
        { movie_id: 24, customer_id: 22, price: "$16.56" },
        { movie_id: 32, customer_id: 160, price: "$5.53" },
        { movie_id: 38, customer_id: 84, price: "$15.88" },
        { movie_id: 21, customer_id: 104, price: "$23.58" },
        { movie_id: 8, customer_id: 97, price: "$27.17" },
        { movie_id: 35, customer_id: 40, price: "$11.92" },
        { movie_id: 24, customer_id: 72, price: "$19.14" },
        { movie_id: 41, customer_id: 4, price: "$24.56" },
        { movie_id: 15, customer_id: 105, price: "$20.21" },
        { movie_id: 12, customer_id: 199, price: "$24.24" },
        { movie_id: 49, customer_id: 172, price: "$10.59" },
        { movie_id: 50, customer_id: 52, price: "$11.31" },
        { movie_id: 30, customer_id: 161, price: "$27.00" },
        { movie_id: 34, customer_id: 151, price: "$7.17" },
        { movie_id: 13, customer_id: 26, price: "$16.56" },
        { movie_id: 17, customer_id: 4, price: "$15.29" },
        { movie_id: 5, customer_id: 66, price: "$24.01" },
        { movie_id: 38, customer_id: 79, price: "$6.13" },
        { movie_id: 8, customer_id: 153, price: "$21.08" },
        { movie_id: 14, customer_id: 146, price: "$29.32" },
        { movie_id: 7, customer_id: 66, price: "$6.14" },
        { movie_id: 10, customer_id: 46, price: "$12.97" },
        { movie_id: 37, customer_id: 129, price: "$12.71" },
        { movie_id: 20, customer_id: 146, price: "$19.53" },
        { movie_id: 13, customer_id: 2, price: "$13.02" },
        { movie_id: 39, customer_id: 42, price: "$23.23" },
        { movie_id: 13, customer_id: 31, price: "$26.40" },
        { movie_id: 35, customer_id: 105, price: "$24.41" },
        { movie_id: 7, customer_id: 148, price: "$5.73" },
        { movie_id: 34, customer_id: 16, price: "$8.22" },
        { movie_id: 18, customer_id: 138, price: "$8.65" },
        { movie_id: 14, customer_id: 34, price: "$11.83" },
        { movie_id: 31, customer_id: 37, price: "$12.77" },
        { movie_id: 45, customer_id: 197, price: "$24.49" },
        { movie_id: 46, customer_id: 100, price: "$25.46" },
        { movie_id: 27, customer_id: 93, price: "$7.38" },
        { movie_id: 15, customer_id: 74, price: "$29.37" },
        { movie_id: 21, customer_id: 64, price: "$15.65" },
        { movie_id: 33, customer_id: 49, price: "$17.30" },
        { movie_id: 40, customer_id: 196, price: "$11.55" },
        { movie_id: 8, customer_id: 170, price: "$18.54" },
        { movie_id: 22, customer_id: 47, price: "$28.52" },
        { movie_id: 10, customer_id: 156, price: "$24.28" },
        { movie_id: 34, customer_id: 46, price: "$13.25" },
        { movie_id: 36, customer_id: 200, price: "$7.20" },
        { movie_id: 44, customer_id: 30, price: "$22.59" },
        { movie_id: 47, customer_id: 108, price: "$16.56" },
        { movie_id: 37, customer_id: 130, price: "$12.62" },
        { movie_id: 12, customer_id: 60, price: "$16.48" },
        { movie_id: 22, customer_id: 110, price: "$9.45" },
        { movie_id: 28, customer_id: 32, price: "$13.39" },
        { movie_id: 34, customer_id: 102, price: "$25.59" },
        { movie_id: 23, customer_id: 194, price: "$16.84" },
        { movie_id: 35, customer_id: 20, price: "$19.99" },
        { movie_id: 36, customer_id: 141, price: "$7.91" },
        { movie_id: 35, customer_id: 95, price: "$5.75" },
        { movie_id: 49, customer_id: 95, price: "$20.23" },
        { movie_id: 14, customer_id: 167, price: "$8.65" },
        { movie_id: 4, customer_id: 197, price: "$5.11" },
        { movie_id: 36, customer_id: 198, price: "$18.87" },
        { movie_id: 8, customer_id: 156, price: "$8.45" },
        { movie_id: 30, customer_id: 120, price: "$18.75" },
        { movie_id: 22, customer_id: 129, price: "$11.94" },
        { movie_id: 6, customer_id: 23, price: "$12.60" },
        { movie_id: 5, customer_id: 30, price: "$27.28" },
        { movie_id: 50, customer_id: 65, price: "$25.06" },
        { movie_id: 30, customer_id: 188, price: "$25.98" },
        { movie_id: 22, customer_id: 24, price: "$6.49" },
        { movie_id: 49, customer_id: 28, price: "$20.50" },
        { movie_id: 9, customer_id: 72, price: "$27.81" },
        { movie_id: 6, customer_id: 88, price: "$6.90" },
        { movie_id: 14, customer_id: 20, price: "$11.84" },
        { movie_id: 37, customer_id: 88, price: "$19.86" },
        { movie_id: 39, customer_id: 73, price: "$17.57" },
        { movie_id: 16, customer_id: 26, price: "$23.60" },
        { movie_id: 6, customer_id: 157, price: "$20.98" },
        { movie_id: 25, customer_id: 36, price: "$5.19" },
        { movie_id: 1, customer_id: 114, price: "$16.57" },
        { movie_id: 15, customer_id: 142, price: "$23.86" },
        { movie_id: 48, customer_id: 189, price: "$10.15" },
        { movie_id: 35, customer_id: 24, price: "$16.12" },
        { movie_id: 46, customer_id: 87, price: "$16.90" },
        { movie_id: 5, customer_id: 80, price: "$18.80" },
        { movie_id: 25, customer_id: 145, price: "$10.13" },
        { movie_id: 22, customer_id: 16, price: "$10.24" },
        { movie_id: 47, customer_id: 145, price: "$24.04" },
        { movie_id: 37, customer_id: 23, price: "$29.69" },
        { movie_id: 36, customer_id: 62, price: "$16.82" },
        { movie_id: 4, customer_id: 196, price: "$13.64" },
        { movie_id: 49, customer_id: 164, price: "$12.83" },
        { movie_id: 13, customer_id: 58, price: "$27.44" },
        { movie_id: 32, customer_id: 108, price: "$29.14" },
        { movie_id: 10, customer_id: 171, price: "$29.80" },
        { movie_id: 50, customer_id: 55, price: "$16.93" },
        { movie_id: 47, customer_id: 150, price: "$18.37" },
        { movie_id: 24, customer_id: 104, price: "$24.12" },
        { movie_id: 1, customer_id: 148, price: "$21.86" },
        { movie_id: 37, customer_id: 52, price: "$14.40" },
        { movie_id: 5, customer_id: 73, price: "$25.25" },
        { movie_id: 3, customer_id: 92, price: "$9.93" },
        { movie_id: 11, customer_id: 99, price: "$15.97" },
        { movie_id: 13, customer_id: 106, price: "$22.19" },
        { movie_id: 14, customer_id: 45, price: "$17.97" },
        { movie_id: 16, customer_id: 194, price: "$24.65" },
        { movie_id: 32, customer_id: 134, price: "$14.64" },
        { movie_id: 22, customer_id: 192, price: "$24.94" },
        { movie_id: 10, customer_id: 118, price: "$14.83" },
        { movie_id: 32, customer_id: 184, price: "$28.54" },
        { movie_id: 30, customer_id: 110, price: "$7.34" },
        { movie_id: 3, customer_id: 1, price: "$24.04" },
        { movie_id: 26, customer_id: 13, price: "$20.50" },
        { movie_id: 25, customer_id: 32, price: "$27.90" },
        { movie_id: 37, customer_id: 167, price: "$10.57" },
        { movie_id: 18, customer_id: 115, price: "$27.11" },
        { movie_id: 21, customer_id: 140, price: "$11.55" },
        { movie_id: 48, customer_id: 39, price: "$5.35" },
        { movie_id: 22, customer_id: 133, price: "$15.07" },
        { movie_id: 31, customer_id: 24, price: "$27.95" },
        { movie_id: 23, customer_id: 92, price: "$14.47" },
        { movie_id: 29, customer_id: 114, price: "$11.79" },
        { movie_id: 23, customer_id: 68, price: "$24.70" },
        { movie_id: 44, customer_id: 122, price: "$22.76" },
        { movie_id: 17, customer_id: 137, price: "$12.20" },
        { movie_id: 1, customer_id: 144, price: "$20.16" },
        { movie_id: 37, customer_id: 105, price: "$22.46" },
        { movie_id: 25, customer_id: 75, price: "$6.92" },
        { movie_id: 36, customer_id: 137, price: "$14.12" },
        { movie_id: 46, customer_id: 62, price: "$20.34" },
        { movie_id: 23, customer_id: 74, price: "$17.29" },
        { movie_id: 44, customer_id: 64, price: "$5.41" },
        { movie_id: 50, customer_id: 91, price: "$18.52" },
        { movie_id: 23, customer_id: 157, price: "$18.47" },
        { movie_id: 23, customer_id: 181, price: "$14.51" },
        { movie_id: 44, customer_id: 51, price: "$27.55" },
        { movie_id: 19, customer_id: 167, price: "$20.24" },
        { movie_id: 45, customer_id: 55, price: "$6.61" },
        { movie_id: 46, customer_id: 182, price: "$19.91" },
        { movie_id: 39, customer_id: 71, price: "$19.58" },
        { movie_id: 44, customer_id: 43, price: "$18.98" },
        { movie_id: 18, customer_id: 167, price: "$28.37" },
        { movie_id: 9, customer_id: 103, price: "$20.44" },
        { movie_id: 12, customer_id: 39, price: "$20.25" },
        { movie_id: 6, customer_id: 155, price: "$5.00" },
        { movie_id: 20, customer_id: 68, price: "$11.64" },
        { movie_id: 32, customer_id: 117, price: "$5.45" },
        { movie_id: 44, customer_id: 38, price: "$28.25" },
        { movie_id: 44, customer_id: 141, price: "$17.00" },
        { movie_id: 46, customer_id: 60, price: "$24.83" },
        { movie_id: 37, customer_id: 81, price: "$13.32" },
        { movie_id: 47, customer_id: 28, price: "$30.00" },
        { movie_id: 21, customer_id: 175, price: "$13.80" },
        { movie_id: 29, customer_id: 122, price: "$11.38" },
        { movie_id: 7, customer_id: 160, price: "$18.93" },
        { movie_id: 35, customer_id: 105, price: "$25.50" },
        { movie_id: 35, customer_id: 199, price: "$14.84" },
        { movie_id: 46, customer_id: 184, price: "$28.21" },
        { movie_id: 1, customer_id: 63, price: "$16.40" },
        { movie_id: 35, customer_id: 113, price: "$15.21" },
        { movie_id: 37, customer_id: 156, price: "$23.01" },
        { movie_id: 14, customer_id: 46, price: "$28.79" },
        { movie_id: 4, customer_id: 187, price: "$25.92" },
        { movie_id: 25, customer_id: 90, price: "$13.91" },
        { movie_id: 34, customer_id: 148, price: "$24.75" },
        { movie_id: 4, customer_id: 85, price: "$12.94" },
        { movie_id: 19, customer_id: 62, price: "$27.40" },
        { movie_id: 6, customer_id: 157, price: "$8.46" },
        { movie_id: 14, customer_id: 116, price: "$14.45" },
        { movie_id: 50, customer_id: 49, price: "$22.42" },
        { movie_id: 41, customer_id: 130, price: "$13.62" },
        { movie_id: 1, customer_id: 126, price: "$7.91" },
        { movie_id: 49, customer_id: 22, price: "$13.20" },
        { movie_id: 50, customer_id: 137, price: "$11.11" },
        { movie_id: 46, customer_id: 86, price: "$9.63" },
        { movie_id: 47, customer_id: 73, price: "$15.87" },
        { movie_id: 33, customer_id: 140, price: "$28.50" },
        { movie_id: 23, customer_id: 150, price: "$23.13" },
        { movie_id: 38, customer_id: 49, price: "$19.24" },
        { movie_id: 35, customer_id: 96, price: "$23.01" }
      ]);
    });
};